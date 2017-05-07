/**
 * Logs data to file
 * @module LogFile
 */
import { createWriteStream } from 'fs';
import StreamLogger from './stream';
/**
 * File logger
 */
export default class FileLogger extends StreamLogger {
  constructor(filename) {
    super(createWriteStream(filename));
  }
}
