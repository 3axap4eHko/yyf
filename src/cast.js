/**
 * Converter module.
 *
 * @module Cast
 */
import { requiredArg } from './utils';

/**
 * Casts value to int or returns 0
 * @param {Number|String} value
 * @returns {Number}
 * @example
 *
 * toInt('100');     // 100
 * toInt('100.0');   // 100
 * toInt('not int'); // 0
 *
 */
export function toInt(value) {
  return isFinite(value = parseInt(value)) ? value : 0;
}
/**
 * Casts value to int or returns defaultValue
 *
 * @param {Number|String} value
 * @param {Number} def
 * @returns {Number}
 * @example
 *
 * toIntOrDefault('100', 10);     // 100
 * toIntOrDefault('100.0', 10);   // 100
 * toIntOrDefault('not int', 10); // 10
 *
 */
export function toIntOrDefault(value, def) {
  return isFinite(value = parseInt(value)) ? value : def || 0;
}
/**
 * Casts value to float or returns 0.0
 *
 * @param {Number|String} value
 * @returns {Number}
 * @example
 *
 * toFloat('10.1');    // 10.1
 * toFloat('10');      // 10.0
 * toFloat('not int'); // 0.0
 */
export function toFloat(value) {
  return isFinite(value = parseFloat(value)) ? value : 0.0;
}
/**
 * Casts value to float or returns default value
 *
 * @param {Number|String} value
 * @param {Number} def
 * @returns {Number}
 */
export function toFloatOrDefault(value, def) {
  return isFinite(value = parseFloat(value)) ? value : def || 0.0;
}
/**
 * Casts value as int to hex
 *
 * @param {Number|String} value
 * @returns {String}
 */
export function toHex(value) {
  return toInt(value).toString(16);
}
/**
 * Casts value as int or default value to hex
 *
 * @param {Number|String} value
 * @param {Number} def
 * @returns {String}
 */
export function toHexOrDefault(value, def) {
  return toIntOrDefault(value, def).toString(16);
}
/**
 * Casts value as int to bin String
 *
 * @param {Number|String} value
 * @returns {String}
 */
export function toBin(value) {
  return toInt(value).toString(2);
}
/**
 * Casts value as int or default value to bin String
 *
 * @param {Number|String} value
 * @param {Number} def
 * @returns {String}
 */
export function toBinOrDefault(value, def) {
  return toIntOrDefault(value, def).toString(2);
}
/**
 * Casts value as int to oct String
 *
 * @param {Number|String} value
 * @returns {String}
 */
export function toOct(value) {
  return toInt(value).toString(8);
}
/**
 * Casts value as int or default value to oct String
 *
 * @param {Number|String} value
 * @param {Number} def
 * @returns {String}
 */
export function toOctOrDefault(value, def) {
  return toIntOrDefault(value, def).toString(8);
}
/**
 * Casts value to String
 *
 * @param value
 * @returns {String}
 */
export function toString(value) {
  return value !== null && typeof value !== 'undefined' ? value.toString() : '';
}
/**
 * Casts value to array
 *
 * @param {String|Array} value
 * @returns {Array}
 */
export function toArray(value) {
  return Array.from(value);
}
/**
 * Casts values as 2 dim array to flat array
 *
 * @param {Array.<Array>} value
 * @returns {Array}
 */
export function toFlatArray(value) {
  return toArray(value).reduce((result, array) => result.concat(toArray(array)), []);
}
/**
 * Casts values as array to 2 dim array from right to left
 *
 * @param {Array|String} value
 * @param {Number} size
 * @returns {Array.<Array>}
 */
export function toComplexArrayRight(value, size = requiredArg('toComplexArrayRight: size')) {
  value = toArray(value);
  const length = value.length;
  return new Array(Math.ceil(length / size)).fill(0).map(() => value.splice(-size)).reverse();
}
/**
 * Casts values as array to 2 dim array from left to right
 *
 * @param {Array|String} value
 * @param {Number} size
 * @returns {Array.<Array>}
 */
export function toComplexArray(value, size = requiredArg('toComplexArray: size')) {
  value = toArray(value);
  const length = value.length;
  return new Array(Math.ceil(length / size)).fill(0).map((v, idx) => value.slice(idx = idx * size, idx + size));
}
/**
 * Creates an array from arguments
 *
 * @param {...*} args
 * @returns {Array<*>}
 */
export function toArrayOf(...args) {
  return args;
}
/**
 * Casts value to JSON string
 *
 * @param {*} value
 * @returns {String}
 */
export function toJsonString(value) {
  return JSON.stringify(value);
}
/**
 * Casts value as JSON string
 *
 * @param {String} value
 * @returns {*}
 */
export function toJsonObject(value) {
  return JSON.parse(value);
}
/**
 * Casts value as string or array of chars to array of bytes
 *
 * @param {Array|String} value
 * @returns {Array<Number>}
 */
export function toCharCodes(value) {
  return toArray(toString(value)).map(c => c.charCodeAt(0));
}
/**
 * Casts key and value to {key, value} object
 *
 * @param {String|Number} key
 * @param {*} value
 * @returns {Object}
 */
export function toKeyValue(key, value) {
  return ({ key, value });
}
/**
 * Casts extracted value from target by key and key to {key, value} object
 *
 * @param {Array|Object|String} target
 * @param {String|Number} key
 * @returns {Object}
 */
export function toKeyValueOf(target, key) {
  return ({ key, value: target[key] });
}
/**
 * Padding leading zeros
 *
 * @private
 * @param {Number|String} value
 * @param {Number} size
 * @returns {String}
 */
function padZeroLeft(value, size) {
  return `000000000000000000000${value}`.slice(-size);
}
/**
 * Casts value as array of bytes to int value
 *
 * @param {Array.<Number>} value
 * @returns {Number}
 */
export function fromBytesToInt(value) {
  return toArray(value).reduce((a, b) => (a << 8) + b);
}
/**
 * Casts value as int to array of bytes
 *
 * @param {Number} value
 * @returns {Array.<Number>}
 */
export function fromIntToBytes(value) {
  return Array.from({ length: Math.max(1, Math.ceil(Math.log2(value + 1) / 8)) })
    .map((v, i) => i * 8)
    .reverse()
    .map(shift => [value >> shift, value -= value >> shift << shift][0]);
}
/**
 * Casts value as single byte to hex string with leading zero
 *
 * @param {Number} value
 * @returns {String}
 */
export function fromByteToHex(value) {
  return padZeroLeft(toHex(value), 2);
}
/**
 * Casts value as hex string to single byte
 *
 * @param {String} value
 * @returns {Number}
 */
export function fromHexToByte(value) {
  return parseInt(value.slice(-2), 16) | 0;
}
/**
 * Casts value as single byte to binary string
 *
 * @param {Number} value
 * @returns {String}
 */
export function fromByteToBits(value) {
  return padZeroLeft(toBin(value), 8);
}
/**
 * Casts value as binary string to single byte
 *
 * @param {String} value
 * @returns {Number}
 */
export function fromBitsToByte(value) {
  return parseInt(value.slice(-8), 2) | 0;
}
/**
 * Casts value as binary string to hex string
 *
 * @param {String} value
 * @returns {String}
 */
export function fromBitsToHex(value) {
  return (toHex(parseInt(value, 2) | 0));
}
/**
 * Casts value as hex string to binary string
 *
 * @param {String} value
 * @returns {String}
 */
export function fromHexToBits(value) {
  return (toBin(parseInt(value, 16) | 0));
}
/**
 * Casts value as hex string to single nibble binary string
 *
 * @param {String} value
 * @returns {String}
 */
export function fromHexToNibble(value) {
  return padZeroLeft(fromHexToBits(value), 4);
}
/**
 * Casts value as single nibble binary string to hex string
 *
 * @param {String} value
 * @returns {String}
 */
export function fromNibbleToHex(value) {
  return padZeroLeft(fromBitsToHex(value), 1);
}
/**
 * Casts value as single byte to single nibble binary string
 *
 * @param {Number} value
 * @returns {String}
 */
export function fromByteToNibble(value) {
  return padZeroLeft(fromByteToBits(value), 4);
}
/**
 * Casts value as single nibble binary string to single byte
 *
 * @param {String} value
 * @returns {Number}
 */
export function fromNibbleToByte(value) {
  return fromBitsToByte(value);
}
/**
 * Casts value as array of bytes to hex string
 *
 * @param {Array.<Number>} value
 * @returns {String}
 */
export function fromBytesToHex(value) {
  return toArray(value).map(fromByteToHex).join('');
}
/**
 * Casts value as hex string to array of bytes
 *
 * @param {String} value
 * @returns {Array.<Number>}
 */
export function fromHexToBytes(value) {
  return toComplexArray(value, 2).map(nibbles => fromHexToByte(nibbles.join('')));
}
/**
 * Casts value as array of bytes to array of binary strings
 *
 * @param {Array.<Number>} value
 * @returns {Array.<String>}
 */
export function fromBytesToBits(value) {
  return toArray(value).map(fromByteToBits);
}
/**
 * Casts value as array of binary strings to array of bytes
 *
 * @param {Array.<String>} value
 * @returns {Array.<Number>}
 */
export function fromBitsToBytes(value) {
  return toArray(value).map(fromBitsToByte);
}
/**
 * Casts value as hex string to array of nibble strings
 *
 * @param {String} value
 * @returns {Array.<String>}
 */
export function fromHexToNibbles(value) {
  return toArray(value).map(fromHexToNibble);
}
/**
 * Casts value as array of nibble strings to hex string
 *
 * @param {Array.<String>} value
 * @returns {String}
 */
export function fromNibblesToHex(value) {
  return toArray(value).map(fromNibbleToHex).join('');
}
/**
 * Casts byte to array of 2 nibble strings
 *
 * @param {Number} value
 * @returns {Array.<String>}
 */
export function fromByteToNibbles(value) {
  return fromHexToNibbles(fromByteToHex(value));
}
/**
 * Casts array of 2 nibble strings to byte
 *
 * @param {Array.<String>} value
 * @returns {Number}
 */
export function fromNibblesToByte(value) {
  return fromHexToByte(fromNibblesToHex(value));
}
/**
 * Casts array of bytes to array of nibble strings
 *
 * @param {Array.<Number>} value
 * @returns {Array.<String>}
 */
export function fromBytesToNibbles(value) {
  return toArray(value).map(fromByteToNibble);
}
/**
 * Casts array of nibble strings to array of bytes
 *
 * @param {Array.<String>} value
 * @returns {Array.<Number>}
 */
export function fromNibblesToBytes(value) {
  return fromHexToBytes(fromNibblesToHex(value));
}
/**
 * Casts char codes of string or array of strings to hex string
 *
 * @param {Array.<String>| String} value
 * @returns {Array}
 */
export function fromStringToHex(value) {
  return toCharCodes(value).map(fromByteToHex);
}
/**
 * Creates array of characters
 *
 * @param {String} from
 * @param {String} to
 * @returns {Array.<String>}
 */
export function charRange(from, to) {
  const start = from.charCodeAt(0);
  const finish = to.charCodeAt(0);
  return new Array(finish - start + 1).fill(start).map((v, idx) => String.fromCharCode(v + idx));
}
/**
 * Default alphabet for encoding
 *
 * @type {String}
 */
export const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()[]{}<>+-=:;?_';

/**
 * Encode bytes to alphabet
 *
 * @param {Array.<Number>} bytes
 * @param {String|Array.<String>|Number} alphabet Better to use alphabet string with length equal power of 2
 * @returns {String}
 */
export function encodeBytes(bytes, alphabet = ALPHABET) {
  if (Number.isInteger(alphabet)) {
    alphabet = ALPHABET.slice(0, alphabet);
  }
  const base = alphabet.length;
  const groupSize = Math.floor(Math.log2(base));
  const bits = fromBytesToBits(bytes).join('');
  return toComplexArrayRight(bits, groupSize)
    .map(value => parseInt(value.join(''), 2))
    .map(idx => alphabet[idx]).join('');
}
/**
 * Decode bytes to alphabet
 *
 * @param {String} hash
 * @param {String|Array.<String>|Number} alphabet Better to use alphabet string with length equal power of 2
 * @returns {Array.<Number>}
 */
export function decodeHash(hash, alphabet = ALPHABET) {
  if (Number.isInteger(alphabet)) {
    alphabet = ALPHABET.slice(0, alphabet);
  }
  const base = alphabet.length;
  const groupSize = Math.floor(Math.log2(base));
  const bits = hash.split('')
    .map(char => alphabet.indexOf(char))
    .map(idx => padZeroLeft(idx.toString(2), groupSize)).join('').split('');

  const paddingSize = bits.length % 8;
  return toComplexArrayRight(bits.slice(paddingSize), 8)
    .map(value => parseInt(value.join(''), 2));
}
/**
 * Casts utf8 string to array of bytes
 *
 * @param {String} text
 * @returns {Array.<Number>}
 */
export function fromUTF8ToArray(text) {
  const bytes = [];
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      bytes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
    }
    else if (charCode < 0xd800 || charCode >= 0xe000) {
      bytes.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
    }
    else {
      i++;
      charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (text.charCodeAt(i) & 0x3ff));
      bytes.push(0xf0 | (charCode >> 18), 0x80 | ((charCode >> 12) & 0x3f), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
    }
  }
  return bytes;
}
/**
 * Casts array of bytes to utf8 string
 *
 * @param {Array.<Number>} bytes
 * @returns {String}
 */
export function fromArrayToUTF8(bytes) {
  let text = '', i;
  for (i = 0; i < bytes.length; i++) {
    const value = bytes[i];
    if (value < 0x80) {
      text += String.fromCharCode(value);
    } else if (value > 0xBF && value < 0xE0) {
      text += String.fromCharCode((value & 0x1F) << 6 | bytes[i + 1] & 0x3F);
      i += 1;
    } else if (value > 0xDF && value < 0xF0) {
      text += String.fromCharCode((value & 0x0F) << 12 | (bytes[i + 1] & 0x3F) << 6 | bytes[i + 2] & 0x3F);
      i += 2;
    } else {
      const charCode = ((value & 0x07) << 18 | (bytes[i + 1] & 0x3F) << 12 | (bytes[i + 2] & 0x3F) << 6 | bytes[i + 3] & 0x3F) - 0x010000;
      text += String.fromCharCode(charCode >> 10 | 0xD800, charCode & 0x03FF | 0xDC00);
      i += 3;
    }
  }
  return text;
}