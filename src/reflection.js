/**
 * Reflection
 * @module Reflection
 */
import { each, map } from './iterate';
import { isArray, isValue, isStructure } from './check';

/**
 * Instantiate class by constructor and arguments
 *
 * @param {Function} Constructor
 * @param {Array} args
 * @returns {Object}
 */
export function create(Constructor, args) {
  Constructor = Function.prototype.bind.apply(Constructor, [null, ...args]);
  return new Constructor();
}
/**
 * Returns class factory
 *
 * @param {Function} Constructor
 * @returns {Function}
 */
export function factory(Constructor) {
  return (...args) => create(Constructor, args);
}
/**
 * Define value in object
 */
export function defineValue(object, property, value) {
  return Object.defineProperty(object, property, {
    writable: true,
    enumerable: false,
    configurable: false,
    value
  });
}
/**
 * Define getter in object
 */
export function defineGetter(object, property, getter) {
  return Object.defineProperty(object, property, {
    enumerable: false,
    configurable: false,
    get: getter
  });
}
/**
 * Define setter in object
 */
export function defineSetter(object, property, setter) {
  return Object.defineProperty(object, property, {
    enumerable: false,
    configurable: false,
    set: setter
  });
}
/**
 * Define getter and setter in object
 */
export function defineGetterSetter(object, property, getter, setter) {
  return Object.defineProperty(object, property, {
    enumerable: false,
    configurable: false,
    get: getter,
    set: setter
  });
}

function _walk(target, parentPath, walker, skipStack) {
  skipStack.push(target);
  each(target, (value, key) => {
    if (!~skipStack.indexOf(value)) {
      const path = [...parentPath, key];
      const isBranch = isStructure(value);
      if (isBranch) {
        _walk(value, path, walker, skipStack);
      }
      walker(value, key, target, path, isBranch);
    }
  });
}
/**
 * Walk by target properties
 *
 * @param {Object} target
 * @param {Function} walker
 */
export function walk(target, walker) {
  if (!isStructure(target)) {
    throw new TypeError('Cannot convert target to object');
  }
  _walk(target, [], walker, []);
  return target;
}

function _merge(target, source, skipStack) {
  skipStack.push(source);
  each(source, (value, key) => {
    if (!~skipStack.indexOf(value)) {
      if (isStructure(target[key]) && isStructure(value)) {
        _merge(target[key], value, skipStack);
      } else {
        target[key] = value;
      }
    }
  });
  return target;
}

/**
 * Merge a few sources properties to the target
 *
 * @param {Object|Array} target
 * @param {...Object|...Array} [args]
 * @returns {Object|Array}
 */
export function merge(target, ...args) {
  if (!isValue(target)) {
    throw new TypeError('Cannot convert target to object');
  }
  args.filter(isStructure).forEach(source => _merge(target, source, []));

  return target;
}

/**
 * Clone target
 *
 * @param {Object|Array} source
 * @returns {Object|Array}
 */
export function clone(source) {
  if (isStructure(source)) {
    return _merge(isArray(source) ? [] : {}, source, []);
  }
  return source;
}

/**
 * Freeze target
 *
 * @param {Object|Array} target
 * @returns {Object|Array}
 */
export function freeze(target) {
  return Object.freeze(walk(target, value => isValue(value) && Object.freeze(value)));
}

/**
 * Prevent extension target
 *
 * @param {Object|Array} target
 * @returns {Object|Array}
 */
export function preventExtensions(target) {
  return Object.preventExtensions(walk(target, value => isValue(value) && Object.preventExtensions(value)));
}

function _proxyHandler(handler, path) {
  return map(handler, callback => callback.bind(handler, path));
}
/**
 * Prevent extension target
 *
 * @param {Object|Array} target
 * @param {Object} handler
 * @returns {Object|Array}
 */
export function proxy(target, handler) {
  walk(target, (value, key, target, path) => {
    if (isStructure(value)) {
      target[key] = new Proxy(value, _proxyHandler(handler, path));
    }
  });
  return new Proxy(target, _proxyHandler(handler, []));
}