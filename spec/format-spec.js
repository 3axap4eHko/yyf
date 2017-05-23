'use strict';

import * as fmt from '../src/format';

describe('Format test suite:', () => {
  describe('string functions:', () => {
    it('fmt.toUpperCaseFirst', function () {
      expect(fmt.upperFirst('asdFg')).toEqual('AsdFg');
    });
    it('fmt.toPascalCase', function () {
      expect(fmt.pascalCase('asD qWe-zXc')).toEqual('AsDQWeZXc');
    });
    it('fmt.toCapitalize', function () {
      expect(fmt.capitalize('asD qWe-zXc')).toEqual('ASD QWE-ZXC');
    });
    it('fmt.padLeft', function () {
      expect(fmt.padLeft('1', 0, '0')).toEqual('1');
      expect(fmt.padLeft('1', 1, '0')).toEqual('1');
      expect(fmt.padLeft('1', 2, '0')).toEqual('01');
    });
    it('fmt.padRight', function () {
      expect(fmt.padRight('1', 0, '0')).toEqual('1');
      expect(fmt.padRight('1', 1, '0')).toEqual('1');
      expect(fmt.padRight('1', 2, '0')).toEqual('10');
    });
  });

  describe('fmt.number:', () => {
    it('fmt.number', function () {
      expect(fmt.number(0, 0)).toEqual('0');
      expect(fmt.number(0, 0, true)).toEqual('0');
      expect(fmt.number(0, 1)).toEqual('0');
      expect(fmt.number(0, 1, true)).toEqual('0');
      expect(fmt.number(0, 2)).toEqual('00');
      expect(fmt.number(0, 2, true)).toEqual('00');

      expect(fmt.number(10, 1)).toEqual('10');
      expect(fmt.number(10, 1, true)).toEqual('+10');
      expect(fmt.number(10, 2)).toEqual('10');
      expect(fmt.number(10, 2, true)).toEqual('+10');
      expect(fmt.number(10, 3)).toEqual('010');
      expect(fmt.number(10, 3, true)).toEqual('+010');

      expect(fmt.number(-10, 1)).toEqual('-10');
      expect(fmt.number(-10, 1, true)).toEqual('-10');
      expect(fmt.number(-10, 2)).toEqual('-10');
      expect(fmt.number(-10, 2, true)).toEqual('-10');
      expect(fmt.number(-10, 3)).toEqual('-010');
      expect(fmt.number(-10, 3, true)).toEqual('-010');
    });
  });

});