/**
 * Logs data to stdout stream
 * @module LogStdOut
 */
import StreamLogger from './stream';

export default class StdOutLogger extends StreamLogger {
  constructor() {
    super(process.stdout);
  }
}
