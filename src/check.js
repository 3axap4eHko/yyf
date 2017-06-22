/**
 * Checks data value and type.
 *
 * @module Check
 */

/**
 * Undefined type string
 * @type {String}
 */
export const TYPE_UNDEFINED = 'undefined';
/**
 * Object type string
 * @type {String}
 */
export const TYPE_OBJECT = 'object';
/**
 * Number type string
 * @type {String}
 */
export const TYPE_NUMBER = 'number';
/**
 * String type string
 * @type {String}
 */
export const TYPE_STRING = 'string';
/**
 * Boolean type string
 * @type {String}
 */
export const TYPE_BOOL = 'boolean';
/**
 * Function type string
 * @type {String}
 */
export const TYPE_FUNCTION = 'function';
/**
 * Symbol type string
 * @type {String}
 */
export const TYPE_SYMBOL = 'symbol';

/**
 * Returns class name of value
 *
 * @param {*} value
 * @returns {String}
 */
export function classOf(value) {
  return ({}).toString.call(value).slice(8, -1);
}
/**
 * Checks is value of specified class
 *
 * @param {*} value
 * @param {Function} type
 * @returns {Boolean}
 */
export function is(value, type) {
  try { return classOf(value) === type.name;} catch (e) { return false;}
}
/**
 * Check if value is null
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isNull(value) {
  return value === null;
}
/**
 * Check if value is not null
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isNotNull(value) {
  return value !== null;
}
/**
 * Checks if value is defined
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isDefined(value) {
  return typeof value !== TYPE_UNDEFINED;
}
/**
 * Checks if value is not defined
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isNotDefined(value) {
  return typeof value === TYPE_UNDEFINED;
}
/**
 * Checks if value is defined and not null
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isValue(value) {
  return isDefined(value) && isNotNull(value);
}
/**
 * Checks if value is defined and not null
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isNotValue(value) {
  return isNotDefined(value) || isNull(value);
}
/**
 * Checks if value is array
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isArray(value) {
  return Array.isArray(value);
}
/**
 * Checks if value is not empty array
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isEmptyArray(value) {
  return isArray(value) && !value.length;
}
/**
 * Checks if value is not empty array
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isNotEmptyArray(value) {
  return isArray(value) && !!value.length;
}
/**
 * Checks if value is number
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isNumber(value) {
  return typeof value === TYPE_NUMBER;
}
/**
 * Checks if value is finite number
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isFiniteNumber(value) {
  return isNumber(value) && Number.isFinite(value);
}
/**
 * Checks if value is integer
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isInteger(value) {
  return Number.isInteger(value);
}
/**
 * Checks if value is float
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isFloat(value) {
  return isFiniteNumber(value) && !Number.isInteger(value);
}
/**
 * Checks if value is string
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isString(value) {
  return typeof value === TYPE_STRING;
}
/**
 * Checks if value is empty string
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isEmptyString(value) {
  return isString(value) && !value.length;
}
/**
 * Checks if value is not empty string
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isNotEmptyString(value) {
  return isString(value) && !!value.length;
}
/**
 * Checks if value is instance of Object
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isObject(value) {
  return is(value, Object);
}
/**
 * Checks if value is function
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isFunction(value) {
  return typeof value === TYPE_FUNCTION;
}
/**
 * Checks if value is arrow function
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isArrowFunction(value) {
  return isFunction(value) && !~value.toString().indexOf(TYPE_FUNCTION);
}
/**
 * Checks if value is boolean
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isBool(value) {
  return typeof value === TYPE_BOOL;
}
/**
 * Checks if value is generator function
 *
 * @param {*} value
 * @returns {boolean|string}
 */
export function isGeneratorFunction(value) {
  return isFunction(value) && classOf(value) === 'GeneratorFunction';
}
/**
 * Checks if value is generator
 *
 * @param {*} value
 * @returns {boolean|string}
 */
export function isGenerator(value) {
  return typeof value === TYPE_OBJECT && classOf(value) === 'Generator';
}
/**
 * Checks if value is iterator
 *
 * @param {*} value
 * @returns {boolean|string}
 */
export function isIterator(value) {
  return typeof value === TYPE_OBJECT && classOf(value).slice(-8) === 'Iterator';
}
/**
 * Checks if value is Symbol
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isSymbol(value) {
  return typeof value === TYPE_SYMBOL;
}
/**
 * Checks if value is structure (may has keys)
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isStructure(value) {
  return isNotNull(value) && typeof value === TYPE_OBJECT;
}
/**
 * Checks if value can be iterated
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isIterable(value) {
  return isStructure(value) || isString(value);
}
/**
 * Checks if value is {key,value} pair object
 *
 * @param {*} value
 * @returns {Boolean}
 */
export function isKeyValue(value) {
  return isObject(value) && 'key' in value && 'value' in value;
}
/**
 * Checks if values are equal
 *
 * @param {*} x
 * @param {*} y
 * @returns {Boolean}
 */
export function areEqual(x, y) {
  if (!isValue(x) || !isValue(y)) {
    return x === y;
  }
  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) {
    return false;
  }
  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) {
    return x === y;
  }
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current
  // ES)
  if (x instanceof RegExp) {
    return y instanceof RegExp && x.toString() === y.toString();
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (isArray(x) && x.length !== y.length) {
    return false;
  }
  // if they are dates, they must had equal valueOf
  if (x instanceof Date) {
    return y instanceof Date && x.valueOf() === y.valueOf();
  }
  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false;
  }
  if (!(y instanceof Object)) {
    return false;
  }
  // recursive object equality check
  const p = Object.keys(x);
  return Object.keys(y).every(i => ~p.indexOf(i)) && p.every(i => areEqual(x[i], y[i]));
}
