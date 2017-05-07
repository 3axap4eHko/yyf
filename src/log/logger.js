/**
 * Base logger module
 * @module Logger
 */
import { interpolate } from '../format';
import { format } from '../date';

export default class Logger {
  static format(message) {
    return interpolate(`[${format(new Date(), 'h:m:s D.M.Y')}] ${message}\n`);
  }
}
