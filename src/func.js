/**
 * Set of useful functions
 * @module Functions
 */
/**
 * Passes arguments to callback
 *
 * @param {Function} callback
 * @returns {Function}
 */
export function fnArgsPass(callback) {
  return (...args) => callback(...args);
}
/**
 * Rollup argument to an array and transfer the array to callback
 *
 * @param callback
 * @returns {Function}
 */
export function fnArgsRollup(callback) {
  return (...args) => callback(args);
}
/**
 * Expands array argument as callback arguments
 *
 * @param {Function} callback
 * @returns {Function}
 */
export function fnArgsExpand(callback) {
  return args => callback(...args);
}
/**
 * Calls callback with value argument and returns value
 *
 * @param {*} value
 * @param {*} callback
 */
export function fnReturnValue(value, callback) {
  return (callback(value), value);
}
/**
 * Pass argument
 *
 * @param {*} arg
 * @returns {*}
 */
export function fnPass(arg) {
  return arg;
}
/**
 * Returns true
 *
 * @returns {boolean}
 */
export function fnTrue() {
  return true;
}
/**
 * Returns false
 *
 * @returns {boolean}
 */
export function fnFalse() {
  return false;
}
/**
 * Logs arguments
 *
 * @param {*} args
 * @returns {*}
 */
export function fnLog(...args) {
  return console.log(...args); // eslint-disable-line no-console
}
/**
 * Creates promise callback
 *
 * @param {Function} callback
 * @returns {Function}
 */
export function fnArgsPromise(callback) {
  return (...args) => new Promise(resolve => resolve(callback(...args)));
}
/**
 * Put callback as promise executor
 *
 * @param {Function} callback
 * @returns {Promise}
 */
export function fnPromise(callback) {
  return new Promise(callback);
}
/**
 * Put callbacks as promise executors
 *
 * @param {Array.<Function>} callbacks
 * @returns {Promise.<*>}
 */
export function fnPromises(...callbacks) {
  return Promise.all(callbacks.map(fnPromise));
}

function _sequencer(functions) {
  if (!functions.length) { return Promise.resolve(true); }
  const fn = functions.shift();
  return fn().then(() => _sequencer(functions));
}
/**
 * Sequenced iteration of callbacks
 *
 * @param {Array.<Function>} callbacks
 * @returns {Promise}
 */
export function fnSequencer(...callbacks) {
  return _sequencer(callbacks);
}

function _exceptor(functions, error) {
  if (!functions.length) {
    throw error;
  }
  const fn = functions.shift();
  return fn().catch(error => {
    if (error.type === 1) {
      throw error;
    }
    return _exceptor(functions, error);
  });
}
/**
 * Sequenced iteration of callbacks till not rejected promise
 *
 * @param callbacks
 * @returns {Promise}
 */
export function fnExceptor(...callbacks) {
  return _exceptor(callbacks);
}
/**
 * Compose and execute callbacks
 *
 * @param {Array.<Function>} callbacks
 * @returns {Promise.<*>}
 */
export function fnComposer(...callbacks) {
  return Promise.all(callbacks.map(callback => new Promise(resolve => resolve(callback()))));
}
/**
 * Curry callback arguments
 *
 * @param {Function} callback
 * @param {...*} [curryArgs]
 * @return {Function}
 */
export function fnCurry(callback, ...curryArgs) {
  return (...args) => callback(...curryArgs, ...args);
}
/**
 * Curry callback arguments from right to left
 *
 * @param {Function} callback
 * @param {...*} [curryArgs]
 * @return {Function}
 */
export function fnCurryRight(callback, ...curryArgs) {
  return (...args) => callback(...args, ...curryArgs);
}
/**
 * Compose functions
 *
 * @param {...Function} callbacks
 * @return {Function}
 */
export function fnCompose(...callbacks) {
  return (...args) => callbacks.reduce((args, fn) => [fn(...args)], args)[0];
}