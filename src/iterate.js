/**
 * Iterates data types
 * @module Iterate
 */
import * as Test from './check';
import * as Cast from './cast';

/**
 * Creates an array with defined length and map values
 *
 * @param {Number} length
 * @param {Function} mapper
 * @returns {Array}
 */
export function rangeFactory(length, mapper) {
  return Array.apply(null, { length }).map(mapper);
}

/**
 * Creates an array with defined length filled by values
 *
 * @param {Number} length
 * @returns {Array}
 */
export function range(length) {
  return rangeFactory(length, Number.call.bind(Number));
}
/**
 * Returns an array of the keys of a given target
 *
 * @param {Object|Array|String|Number} target
 * @static
 * @returns {Array.<Number|String>|Iterator.<Number|String>}
 */
export function keys(target) {
  return Test.isInteger(target) ? range(target) : (Test.isObject(target) ? Object.keys(target) : Object.keys(target).map(Cast.toInt));
}
/**
 * Returns an array of the values of a given target
 *
 * @param {Object|Array|String} target
 * @static
 * @returns {Array.<*>|Iterator.<*>}
 */
export function values(target) {
  return Object.keys(target).map(key => target[key]);
}
/**
 * Returns an array of the key-value pairs of a given target
 *
 * @param {Object|Array|String|Number} target
 * @static
 * @returns {Array.<{key: Number|String, value: *}>}
 */
export function pairs(target) {
  return keys(target).map(key => Cast.toKeyValueOf(target, key));
}

/**
 * Iterates each enumerable property in target
 *
 * @param {Object|Array|String} target
 * @param {Function} callback
 */
export function each(target, callback) {
  return keys(target).forEach(key => callback(target[key], key, target));
}
/**
 * Iterates each enumerable property in target and return true if no one callback return false
 *
 * @param {Object|Array|String} target
 * @param {Function} callback
 * @returns {Boolean}
 */
export function every(target, callback) {
  return keys(target).every(key => callback(target[key], key, target));
}
/**
 * Iterates enumerable property in target and return true if any callback return true
 * @alias some
 * @param {Object|Array|String} target
 * @param {Function} callback
 * @returns {Boolean}
 */
export function any(target, callback) {
  return keys(target).some(key => callback(target[key], key, target));
}
export const some = any;

/**
 * Creates generator
 *
 * @param {Array|Object|String|Number} target
 * @returns {Generator}
 */
export function createGenerator(target) {
  if (Test.isInteger(target)) {
    return function*() {
      let idx = 0;
      while (idx < target) {
        yield idx++;
      }
    };
  }
  if (Test.isObject(target)) {
    return function*() {
      const keys = Object.keys(target);
      while (keys.length) {
        yield Cast.toKeyValueOf(target, keys.shift());
      }
    };
  }
  if (Test.isArray(target) || Test.isString(target)) {
    return target[Symbol.iterator]();
  }
}

/**
 * Iterates generator by callback
 *
 * @param {Generator} generator
 * @param {Function} callback
 * @param {Function} done
 */
export function iterateGenerator(generator, callback, done) {
  const next = generator.next();
  if (next.done) {
    return done();
  }
  callback(next.value, () => iterateGenerator(generator, callback, done));
}
/**
 * Calls {callback} function {times} times
 * @param {Number} times
 * @param {Function} callback
 */
export function repeat(times, callback) {
  let iteration = 0;
  while (iteration < times) {callback(iteration++, times);}
}
/**
 * Calls {callback} function {times} times and pass result to {handler}
 *
 * @param {Number} times
 * @param {Function} callback
 * @param {Function} handler
 */
export function repeatHandled(times, callback, handler) {
  repeat(times, iteration => handler(callback(iteration, times)));
}

/**
 * Calls {callback} function {times} times and while callback result is not falsy
 *
 * @param {Number} times
 * @param {Function} callback
 */
export function repeatWhile(times, callback) {
  let iteration = 0;
  while (iteration < times && callback(iteration, times)) {iteration++;}
}

/**
 * Maps values of {target} through {callback}
 *
 * @param {Object|Array|String} target
 * @param {Function} callback
 * @returns {Object|Array|String}
 */
export function map(target, callback) {
  if (Test.isObject(target)) {
    return keys(target).reduce((mapped, key) => (mapped[key] = callback(target[key], key, target), mapped), {});
  }
  if (Test.isString(target)) {
    return Cast.toArray(target).map(callback).join('');
  }
  return Cast.toArray(target).map(callback);
}

/**
 * Reduces values of {target} through callback
 *
 * @param {Object|Array|String} target
 * @param {Function} callback
 * @param {*} [init]
 * @returns {*}
 */
export function reduce(target, callback, ...init) {
  const _keys = keys(target);
  const _values = values(target);
  init.unshift((cur, next, idx) => callback(cur, next, _keys[idx], target));
  return _values.reduce(...init);
}

/**
 * Aggregates values of {target} through callback with array result
 *
 * @param {Object|Array|String} target
 * @param {Function} callback
 * @returns {Object|Array|String}
 */
export function aggregate(target, callback) {
  if (Test.isObject(target)) {
    return keys(target).reduce((mapped, key) => Object.assign(mapped, ...callback(target[key], key, target)), {});
  }
  if (Test.isString(target)) {
    return Cast.toFlatArray(Cast.toArray(target).map(callback)).join('');
  }
  return Cast.toFlatArray(Cast.toArray(target).map(callback));
}


function _leadType(target, groups) {
  if (Test.isObject(target)) {
    return groups.map(group => group.reduce((group, pair) => (group[pair.key] = pair.value, group), {}));
  }
  groups = groups.map(group => group.map(pair => pair.value));
  if (Test.isString(target)) {
    groups = groups.map(group => group.join(''));
  }
  return groups;
}
/**
 * @param {Object|Array|String} target
 * @param {Number} size
 * @returns {Array}
 */
export function groupOf(target, size) {
  const _pairs = pairs(target);
  const groups = range(Math.ceil(_pairs.length / size)).map(id => {
    id *= size;
    return _pairs.slice(id, id + size);
  });
  return _leadType(target, groups);
}
/**
 * Groups target values by specified size from right to left
 *
 * @param {Object|Array|String} target
 * @param {Number} size
 * @returns {Array.<*>}
 */
export function groupRightOf(target, size) {
  const _pairs = pairs(target).reverse();
  const groups = range(Math.ceil(_pairs.length / size)).map(id => {
    id *= size;
    return _pairs.slice(id, id + size);
  }).reverse();
  return _leadType(target, groups);
}

/**
 * Filters values of target through callback
 *
 * @param {Object|Array|String} target
 * @param {Function} callback
 * @returns {Object|Array|String}
 */
export function filter(target, callback) {
  const _pairs = pairs(target);
  const filtered = _pairs.filter(pair => callback(pair.value, pair.key, target));
  if (Test.isArray(target)) {
    return filtered.map(pair => pair.value);
  }
  if (Test.isString(target)) {
    return filtered.map(pair => pair.value).join('');
  }
  return filtered.reduce((result, pair) => {
    result[pair.key] = pair.value;
    return result;
  }, {});
}

/**
 * Excludes values by keys from target
 *
 * @param {Object|Array|String} target
 * @param {Array|RegExp} keys
 * @returns {Object|Array|String}
 */
export function exclude(target, keys) {
  if (keys instanceof RegExp) {
    return filter(target, (value, key) => !keys.test(key));
  }
  return filter(target, (value, key) => !~keys.indexOf(key));
}

/**
 * Extracts values by keys from target
 *
 * @param {Object|Array|String} target
 * @param {Array|RegExp} keys
 * @returns {Object|Array|String}
 */
export function extract(target, keys) {
  if (keys instanceof RegExp) {
    return filter(target, (value, key) => keys.test(key));
  }
  return filter(target, (value, key) => !!~keys.indexOf(key));
}

/**
 * Returns first key-value pair from the target argument on truth callback result
 *
 * @param {Array|Object|String} target
 * @param {Function} callback
 * @param {String|Number|{key: String|Number, value: *}} [defaultKey]
 * @returns {{key: String|Number, value: *}}
 */
export function first(target, callback, defaultKey) {
  let firstKey = keys(target).find(key => callback(target[key], key, target));
  if (!Test.isDefined(firstKey)) {
    firstKey = defaultKey;
  }
  return Cast.toKeyValueOf(target, firstKey);
}
/**
 * Returns last key-value pair from the target argument on truth callback result
 *
 * @param {Array|Object|String} target
 * @param {Function} callback
 * @param {String|Number} [defaultKey]
 * @returns {{key: String|Number, value: *}}
 */
export function last(target, callback, defaultKey) {
  const last = keys(target).reduce((lastKey, key) => {
    if (callback(target[key], key, target)) {
      lastKey = key;
    }
    return lastKey;
  }, defaultKey);
  if (Test.isKeyValue(last)) {
    return last;
  }
  return Cast.toKeyValueOf(target, last);
}
/**
 * Returns last key-value pair from the target argument on truth callback result
 *
 * @param {Array|Object|String} target
 * @param {Function} callback
 * @returns {{key: String|Number, value: *}}
 */
export function compare(target, callback) {
  const _keys = keys(target);
  const key = _keys.reduce((curKey, nextKey) => callback(target[curKey], target[nextKey], nextKey, target) ? nextKey : curKey);
  return Cast.toKeyValueOf(target, key);
}

/**
 * Returns first key-value pair and remove it from the target argument on truth callback result
 *
 * @param {Array|Object|String} target
 * @param {Function} callback
 * @returns {{key: String|Number, value: *}}
 */
export function take(target, callback) {
  const pair = first(target, callback);
  if (Test.isObject(target)) {
    delete target[pair.key];
  } else if (Test.isArray(target)) {
    target.splice(pair.key, 1);
  }
  return pair;
}

/**
 * Returns first key-value pair and remove it from the target argument on truth callback result
 *
 * @param {Array|Object|String} target
 * @param {Function} callback
 * @returns {{key: String|Number, value: *}}
 */
export function compareTake(target, callback) {
  const pair = compare(target, callback);
  if (Test.isArray(target)) {
    target.splice(pair.key, 1);
  } else {
    delete target[pair.key];
  }
  return pair;
}

/**
 * Counts of values
 *
 * @param {Array|Object|String} target
 * @param {Function} callback
 * @returns {Number}
 */
export function countOf(target, callback) {
  return keys(target).reduce((count, key) => callback(target[key], key, target) ? count + 1 : count, 0);
}
