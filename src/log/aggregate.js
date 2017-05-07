/**
 * Aggregate logs data
 * @module LogAggregator
 */
import Logger from './logger';

const _loggers = Symbol('loggers');
/**
 * Aggregate loggers
 */
export default class AggregateLogger extends Logger {
  constructor(...args) {
    super();
    this[_loggers] = args;
  }

  register(logger) {
    this[_loggers].push(logger);
  }

  log(message) {
    this[_loggers].forEach(logger => logger.log(message));
  }
}
