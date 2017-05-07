/**
 * Debug tools
 * @module Debug
 */
import { TYPE_UNDEFINED, areEqual } from './check';

const stop = (code = 0) => typeof process !== TYPE_UNDEFINED && process.exit && process.exit(code);
/**
 * Logs all args
 *
 * @param {...*} args
 */
export function $dbg(...args) {
  args.forEach(arg => console.log(arg)); // eslint-disable-line no-console
  stop();
}
/**
 * Logs all args if condition is true
 *
 * @param {boolean} condition
 * @param {...*} args
 */
export function $dbgOn(condition, ...args) {
  if (condition) {
    $dbg(...args);
  }
}
/**
 * Conditional breakpoint
 *
 * @param condition
 */
export function $brk(condition = true) {
  if (condition) {
    debugger; // eslint-disable-line no-debugger
  }
}
/**
 * Dump value with title and pass through
 *
 * @param {*} value
 * @param {string} title
 * @returns {*}
 */
export function $dmp(value, title) {
  console.log(['Dump'], title, value); // eslint-disable-line no-console
  return value;
}
/**
 * Conditional dumping value
 *
 * @param {boolean} condition
 * @param {*} value
 * @param {string} title
 * @returns {*}
 */
export function $dmpOn(condition, value, title) {
  if (condition) {
    return $dmp(value, title);
  }
  return value;
}
/**
 * Measure execution time
 *
 * @param {Function} callback
 * @param {number} timeout
 * @returns {Promise.<number>} Execution time
 */
export function $watch(callback, timeout = 1000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    callback(resolve);
    setTimeout(reject, timeout, new Error(`Timeout of ${timeout}`));
  }).then(() => Date.now() - start);
}
/**
 * Expect same assert
 *
 * @throws Throws exception if value is not same as expected
 * @param {*} value
 * @param {*} expected
 * @param {string} [message]
 * @example
 *
 * $expectSame('test','test') // not throw an error
 * $expectSame({},{}) // not throw an error
 * $expectSame(/^$/,/^$/) // not throw an error
 *
 */
export function $expectSame(value, expected, message = 'Invalid same value expectation: ') {
  if (areEqual(value, expected)) {
    throw new Error(message + value);
  }
}
/**
 * Expect equal assert
 *
 * @throws Throws exception if value is not same equal to expected
 * @param {*} value
 * @param {*} expected
 * @param {string} [message]
 * @example
 *
 * $expectSame('test','test') // not throw an error
 * $expectSame({},{}) // throw an error
 * $expectSame(/^$/,/^$/) // throw an error
 *
 */
export function $expectEqual(value, expected, message = 'Invalid equal value expectation: ') {
  if (value !== expected) {
    throw new Error(message + value);
  }
}
/**
 * Expect value is true
 *
 * @throws Throws exception if value is not true
 * @param {boolean} value
 * @param {string} message
 */
export function $expectTrue(value, message = 'Invalid true expectation: ') {
  $expectEqual(value, true, message);
}
/**
 * Expect callback throws exception
 *
 * @param {Function} callback
 * @param {string} message
 */
export function $expectThrow(callback, message = 'Invalid throw expectation') {
  try {
    callback();
  } catch (e) {
    return;
  }
  throw new Error(message);
}

const context = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

context.$dbg = $dbg;
context.$dbgOn = $dbgOn;
context.$brk = $brk;
context.$dmp = $dmp;
context.$dmpOn = $dmpOn;
context.$watch = $watch;
context.$expectSame = $expectSame;
context.$expectEqual = $expectEqual;
context.$expectTrue = $expectTrue;
context.$expectThrow = $expectThrow;
