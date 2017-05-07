/**
 * Date operation module
 * @module Date
 */
import { number } from './format';
import { toArray } from './cast';
import { fnReturnValue } from './func';

const dateFilters = {
  'Y': _date => _date.getFullYear(),
  'y': _date => _date.getFullYear() % 100,
  'M': _date => number(_date.getMonth() + 1, 2),
  'D': _date => number(_date.getDate(), 2),
  'W': _date => number(_date.getDay(), 2),
  'h': _date => number(_date.getHours(), 2),
  'm': _date => number(_date.getMinutes(), 2),
  's': _date => number(_date.getSeconds(), 2),
  'u': _date => _date.getMilliseconds(),
  'z': _date => _date.getTimezoneOffset(),
  'Z': _date => {
    const diff = _date.getTimezoneOffset() / 60;
    if (!diff) {
      return 'Z';
    }
    return `${number(diff | 0, 2, true)}:${number(Math.abs(diff) % 1 * 60, 2)}`;
  }
};
/**
 * W3C Date format
 * @type {String}
 */
export const DATE_W3C = 'Y-M-DTh:m:sZ:00';
/**
 * XSD date format
 * @type {string}
 */
export const DATE_XSD = 'Y-M-DTh:m:sZ';
/**
 * Formats date
 *
 * @param {Date} date
 * @param {string} format
 * @returns {string}
 */
export function format(date, format) {
  return toArray(format).map(token => dateFilters[token] ? dateFilters[token](date) : token).join('');
}

/**
 * Adds years to date
 *
 * @param {Date} date
 * @param {number} years
 * @returns {Date}
 */
export function addYears(date, years) {
  return fnReturnValue(new Date(date), _date => _date.setFullYear(_date.getFullYear() + years));
}
/**
 * Adds months to date
 *
 * @param {Date} date
 * @param {number} months
 * @returns {Date}
 */
export function addMonths(date, months) {
  return fnReturnValue(new Date(date), _date => _date.setMonth(_date.getMonth() + months));
}
/**
 * Adds days to date
 *
 * @param {Date} date
 * @param {number} days
 * @returns {Date}
 */
export function addDays(date, days) {
  return fnReturnValue(new Date(date), _date => _date.setDate(_date.getDate() + days));
}
/**
 * Adds days to date
 *
 * @param {Date} date
 * @param {number} hours
 * @returns {Date}
 */
export function addHours(date, hours) {
  return fnReturnValue(new Date(date), _date => _date.setHours(_date.getHours() + hours));
}
/**
 * Adds days to date
 *
 * @param {Date} date
 * @param {number} minutes
 * @returns {Date}
 */
export function addMinutes(date, minutes) {
  return fnReturnValue(new Date(date), _date => _date.setMinutes(_date.getMinutes() + minutes));
}
/**
 * Adds seconds to date
 *
 * @param {Date} date
 * @param {number} seconds
 * @returns {Date}
 */
export function addSeconds(date, seconds) {
  return fnReturnValue(new Date(date), _date => _date.setSeconds(_date.getSeconds() + seconds));
}
/**
 * Formats date to XSD format
 *
 * @param {Date} date
 * @returns {string}
 */
export function dateToXsd(date) {
  return format(date, DATE_XSD);
}
