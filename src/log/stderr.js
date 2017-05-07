/**
 * Logs data to stderr stream
 * @module LogStdError
 */
import StreamLogger from './stream';

export default class StdErrLogger extends StreamLogger {
  constructor() {
    super(process.stderr);
  }
}
