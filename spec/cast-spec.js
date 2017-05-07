'use strict';

import * as _ from '../src/cast';
import * as R from '../src/random';

const TestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const TestComplexArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]];


describe('Convert test suite:', () => {
  it('toInt', () => {
    var int = _.toInt('123c');
    expect(typeof int).toEqual('number');
    expect(int).toEqual(123);
  });
  it('toIntOrDefault', () => {
    var int = _.toIntOrDefault('c', 10);
    expect(typeof int).toEqual('number');
    expect(int).toEqual(10);
  });
  it('toFloat', () => {
    var float = _.toFloat('123.3123c');
    expect(typeof float).toEqual('number');
    expect(float).toEqual(123.3123);
  });
  it('toFloatOrDefault', () => {
    var float = _.toFloatOrDefault('c', 0.1);
    expect(typeof float).toEqual('number');
    expect(float).toEqual(0.1);
  });
  it('toString', () => {
    expect(typeof _.toString() === 'string').toBeTruthy();
    expect(_.toString(1)).toEqual('1');
    expect(_.toString(1.1)).toEqual('1.1');
    expect(_.toString(true)).toEqual('true');
  });
  it('toArray', () => {
    var array = _.toArray('1234567890');
    expect(Array.isArray(array)).toBeTruthy();
    expect(array).toEqual(TestArray.map(_.toString));
  });
  it('toFlatArray', () => {
    var array = _.toFlatArray(TestComplexArray);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array).toEqual(TestArray);
  });
  it('toComplexArray', () => {
    var array = _.toComplexArray(TestArray, 2);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array).toEqual(TestComplexArray);
  });
  it('toComplexArrayRight', () => {
    var array = _.toComplexArrayRight(TestArray, 2);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array).toEqual(TestComplexArray);
  });

  it('toArrayOf', () => {
    var array = _.toArrayOf(...TestArray);
    expect(Array.isArray(array)).toBeTruthy();
    expect(array).toEqual(TestArray);
  });

  it('toHex', () => {
    expect(_.toHex(256)).toEqual('100');
    expect(_.toHex(16)).toEqual('10');
    expect(_.toHex('256')).toEqual('100');
    expect(_.toHex('16')).toEqual('10');
  });

  it('toBin', () => {
    expect(_.toBin(255)).toEqual('11111111');
    expect(_.toBin(15)).toEqual('1111');
    expect(_.toBin('255')).toEqual('11111111');
    expect(_.toBin('15')).toEqual('1111');
  });

  it('fromBytesToInt', () => {
    expect(_.fromBytesToInt([0])).toEqual(0);
    expect(_.fromBytesToInt([1])).toEqual(1);
    expect(_.fromBytesToInt([255])).toEqual(255);
    expect(_.fromBytesToInt([1, 0])).toEqual(256);
    expect(_.fromBytesToInt([4, 0])).toEqual(1024);
    expect(_.fromBytesToInt([1, 1, 1])).toEqual(65793);
  });
  it('fromIntToBytes', () => {
    expect(_.fromIntToBytes(0)).toEqual([0]);
    expect(_.fromIntToBytes(1)).toEqual([1]);
    expect(_.fromIntToBytes(255)).toEqual([255]);
    expect(_.fromIntToBytes(256)).toEqual([1, 0]);
    expect(_.fromIntToBytes(1024)).toEqual([4, 0]);
    expect(_.fromIntToBytes(65793)).toEqual([1, 1, 1]);
  });

  it('fromByteToHex', () => {
    expect(_.fromByteToHex(255)).toEqual('ff');
    expect(_.fromByteToHex(15)).toEqual('0f');
    expect(_.fromByteToHex('255')).toEqual('ff');
    expect(_.fromByteToHex('15')).toEqual('0f');
  });
  it('fromHexToByte', () => {
    expect(_.fromHexToByte('ff')).toEqual(255);
    expect(_.fromHexToByte('f')).toEqual(15);
  });
  it('fromByteToBits', () => {
    expect(_.fromByteToBits(255)).toEqual('11111111');
    expect(_.fromByteToBits(15)).toEqual('00001111');
    expect(_.fromByteToBits('255')).toEqual('11111111');
    expect(_.fromByteToBits('15')).toEqual('00001111');
  });
  it('fromBitsToByte', () => {
    expect(_.fromBitsToByte('11111111')).toEqual(255);
    expect(_.fromBitsToByte('1111')).toEqual(15);
  });
  it('fromBitsToHex', () => {
    expect(_.fromBitsToHex('11111111')).toEqual('ff');
    expect(_.fromBitsToHex('1111')).toEqual('f');
  });
  it('fromHexToBits', () => {
    expect(_.fromHexToBits('ff')).toEqual('11111111');
    expect(_.fromHexToBits('f')).toEqual('1111');
  });
  it('fromHexToNibble', () => {
    expect(_.fromHexToNibble('ff')).toEqual('1111');
    expect(_.fromHexToNibble('f')).toEqual('1111');
  });
  it('fromNibbleToHex', () => {
    expect(_.fromNibbleToHex('1111')).toEqual('f');
  });
  it('fromByteToNibble', () => {
    expect(_.fromByteToNibble(255)).toEqual('1111');
    expect(_.fromByteToNibble(15)).toEqual('1111');
  });
  it('fromNibbleToByte', () => {
    expect(_.fromNibbleToByte('1111')).toEqual(15);
  });
  it('fromBytesToHex', () => {
    expect(_.fromBytesToHex([255])).toEqual('ff');
    expect(_.fromBytesToHex([255, 255])).toEqual('ffff');
  });
  it('fromHexToBytes', () => {
    expect(_.fromHexToBytes('ff')).toEqual([255]);
    expect(_.fromHexToBytes('ffff')).toEqual([255, 255]);
  });
  it('fromBytesToBits', () => {
    expect(_.fromBytesToBits([255])).toEqual(['11111111']);
    expect(_.fromBytesToBits([255, 255])).toEqual(['11111111', '11111111']);
  });
  it('fromBitsToBytes', () => {
    expect(_.fromBitsToBytes(['11111111'])).toEqual([255]);
    expect(_.fromBitsToBytes(['11111111', '11111111'])).toEqual([255, 255]);
  });
  it('fromHexToNibbles', () => {
    expect(_.fromHexToNibbles('f')).toEqual(['1111']);
    expect(_.fromHexToNibbles('ff')).toEqual(['1111', '1111']);
  });
  it('fromByteToNibbles', () => {
    expect(_.fromByteToNibbles(255)).toEqual(['1111', '1111']);
  });
  it('fromNibblesToByte', () => {
    expect(_.fromNibblesToByte(['1111'])).toEqual(15);
    expect(_.fromNibblesToByte(['1111', '1111'])).toEqual(255);
  });
  it('fromNibblesToHex', () => {
    expect(_.fromNibblesToHex(['1111'])).toEqual('f');
    expect(_.fromNibblesToHex(['1111', '1111'])).toEqual('ff');
  });
  it('fromBytesToNibbles', () => {
    expect(_.fromBytesToNibbles([15])).toEqual(['1111']);
    expect(_.fromBytesToNibbles([255])).toEqual(['1111']);
    expect(_.fromBytesToNibbles([15, 15])).toEqual(['1111', '1111']);
  });
  it('fromNibblesToBytes', () => {
    expect(_.fromNibblesToBytes(['1111'])).toEqual([15]);
    expect(_.fromNibblesToBytes(['1111', '1111'])).toEqual([255]);
    expect(_.fromNibblesToBytes(['1111', '1111', '1111'])).toEqual([255, 15]);
  });
  it('encodeBytes', () => {
    let testCount = 84;
    while (testCount--) {
      const test = Array.from({ length: R.number(50, 100) }).map(() => R.number(255));
      expect(_.decodeHash(_.encodeBytes(test, testCount + 2), testCount  + 2)).toEqual(test);
    }
  });
});