/**
 * String format module
 * @module Format
 */
import { each } from './iterate';
import { isStructure } from './check';
import { toInt } from './cast';

/**
 * Converts string to upper first
 *
 * @param {string} str
 * @returns {string}
 */
export function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
/**
 * Converts string to lower first
 *
 * @param {string} str
 * @returns {string}
 */
export function lowerFirst(str) {
  return str.charAt(0).toLowerCase() + str.substr(1);
}
/**
 *
 * @param {string} str
 * @returns {Array.<string>}
 */
export function words(str) {
  return str.split(/[\s\-_.,]+/g);
}
/**
 * Converts string to PascalCase
 *
 * @param {string} str
 * @param {string} [join]
 * @returns {string}
 */
export function pascalCase(str, join = '') {
  return words(str).map(upperFirst).join(join);
}
/**
 * Converts string to camelCase
 *
 * @param {string} str
 * @returns {string}
 */
export function camelCase(str) {
  return lowerFirst(pascalCase(str));
}
/**
 * Converts string to capitalized
 *
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  return str.toUpperCase();
}
/**
 * Returns search string occurrences count
 *
 * @param {string} str
 * @param {string} search
 * @returns {number}
 */
export function getOccurrences(str, search) {
  return (str.match(new RegExp(search, 'g')) || []).length;
}
/**
 * Pads string left by specified character until size reached
 *
 * @param {string} str
 * @param {number} size
 * @param {string} char
 * @returns {string}
 */
export function padLeft(str, size, char) {
  return (char || ' ').repeat(Math.max(0, size - str.length)) + str;
}
/**
 * Pads string right by specified character until size reached
 *
 * @param {string} str
 * @param {number} size
 * @param {string} char
 * @returns {string}
 */
export function padRight(str, size, char) {
  return str + (char || ' ').repeat(Math.max(0, size - str.length));
}
/**
 * Interpolates string
 *
 * @param {string} str
 * @param {...*} [args]
 * @returns {string}
 */
export function interpolate(str, ...args) {
  let result = str.toString();
  if (args.length === 1 && isStructure(args[0])) {
    args = args[0];
  }
  each(args, (value, key) => {
    const regexp = new RegExp(`\\{${key}\\}`, 'g');
    result = result.replace(regexp, value);
  });
  return result;
}
/**
 * Formats number to specified string length
 *
 * @param {number} num
 * @param {number} intSize
 * @param {boolean} [forceSign]
 * @returns {string}
 */
export function number(num, intSize, forceSign) {
  num = toInt(num);
  intSize = toInt(intSize);
  const str = padLeft(Math.abs(num).toString(), intSize, '0');
  if (num < 0) {
    return `-${str}`;
  } else if (forceSign && num > 0) {
    return `+${str}`;
  }
  return str;
}
/**
 * Escapes regular expression characters
 *
 * @param {string} str
 * @returns {string}
 */
export function escapeRegexp(str) {
  return str.replace(/[-[\]{}().*+?,\\^$|#\s]/g, '\\$&');
}
