/**
 * Custom logger
 * @module LogCustom
 */
import Logger from './logger';

const _callback = Symbol('Callback');

export default class CustomLogger extends Logger {

  constructor(callback) {
    super();
    this[_callback] = callback;
  }

  log(message) {
    this[_callback](Logger.format(message));
  }
}
