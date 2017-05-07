/**
 * Generates random values
 * @module Random
 */
import { isNotDefined } from './check';
import { rangeFactory, first, values } from './iterate';

/**
 * Return random int value. If arguments not defined then return float value between 0 and 1
 *
 * @param {int} [min]
 * @param {int} [max]
 * @returns {Number}
 */
export function number(min, max) {
  if (isNotDefined(min)) {
    return Math.random();
  } else if (isNotDefined(max)) {
    max = min;
    min = 0;
  }
  return min + Math.round(Math.random() * (max - min));
}
/**
 * Return random boolean value
 *
 * @returns {boolean}
 */
export function bool() {
  return Math.random() > 0.5;
}
/**
 * Return random float array with defined size
 *
 * @param {int} size
 * @returns {Array.<Number>}
 */
export function array(size) {
  return rangeFactory(size, () => Math.random());
}
/**
 * Return random string [a-zA-Z] with defined size
 *
 * @param {int} size
 * @returns {String}
 */
export function string(size) {
  return rangeFactory(size, c => String.fromCharCode(number(c = bool() ? 65 : 97, c + 25))).join('');
}
/**
 * Return random string from provided alphabet with defined size
 *
 * @param {int} size
 * @param {String|Array.<String>} alphabet
 * @returns {String}
 */
export function stringAlphabet(size, alphabet) {
  return rangeFactory(size, () => alphabet[number(alphabet.length - 1)]).join('');
}
/**
 * Return index of defined probability values arguments
 *
 * @param {...Number} probabilityData probability value
 * @returns {Number}
 */
export function caseOf(...probabilityData) {
  const total = probabilityData.reduce((sum, v) => sum + v);
  const select = number(total);
  let skip = 0;
  return first(probabilityData, value => select < (skip += value)).key;
}
/**
 * Return random argument
 *
 * @param {...*} args
 * @returns {*}
 */
export function argument(...args) {
  return args[number(args.length - 1)];
}

const s = {
  get a() {
    return number(0x1000, 0x1FFF).toString(16);
  },
  get b() {
    return `0000${Date.now().toString(16)}`.slice(-12);
  }
};

/**
 * GUID string generator
 *
 * @returns {string}
 */
export function GUID() {
  return `${s.a}${s.a}-${s.a}-${s.a}-${s.a}-${s.b}`;
}
/**
 * Shuffle all values of the target
 *
 * @param {Array|Object|string} target
 * @returns {Array}
 */
export function shuffle(target) {
  const _values = values(target),
    result = [];
  while (_values.length) {
    result.push(_values.splice(number(_values.length), 1)[0]);
  }
  return result;
}