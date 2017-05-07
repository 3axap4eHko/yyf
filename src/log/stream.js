/**
 * Logs data to stream
 * @module LogStream
 */
import Logger from './logger';

const _stream = Symbol('Stream');

export default class StreamLogger extends Logger {

  constructor(stream) {
    super();
    this[stream] = stream;
  }

  log(message) {
    this[_stream].write(Logger.format(message));
  }
}
