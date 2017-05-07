'use strict';

import * as _ from '../src/check';

describe('Validators suite:', () => {

    it('classOf return className', () => {
        expect(_.classOf(1)).toEqual('Number');
        expect(_.classOf('')).toEqual('String');
        expect(_.classOf(true)).toEqual('Boolean');
        expect(_.classOf([])).toEqual('Array');
        expect(_.classOf({})).toEqual('Object');
        expect(_.classOf(()=> {})).toEqual('Function');
        expect(_.classOf(new Date())).toEqual('Date');
        expect(_.classOf(null)).toEqual('Null');
        expect(_.classOf(undefined)).toEqual('Undefined');
    });

    it('is compare value with className', () => {
        expect(_.is(1, Number)).toBeTruthy();
        expect(_.is('', String)).toBeTruthy();
        expect(_.is(true, Boolean)).toBeTruthy();
        expect(_.is(new Date, Date)).toBeTruthy();
        expect(_.is([], Array)).toBeTruthy();
        expect(_.is({}, Object)).toBeTruthy();
        expect(_.is(()=> {}, Function)).toBeTruthy();
    });

    it('isDefined', () => {
        expect(_.isDefined(1)).toBeTruthy();
        expect(_.isDefined()).toBeFalsy();
    });

    it('isNull', () => {
        expect(_.isNull(null)).toBeTruthy();
        expect(_.isNull()).toBeFalsy();
    });

    it('isValue', () => {
        expect(_.isValue(1)).toBeTruthy();
        expect(_.isValue('')).toBeTruthy();
        expect(_.isValue(true)).toBeTruthy();
        expect(_.isValue([])).toBeTruthy();
        expect(_.isValue({})).toBeTruthy();
        expect(_.isValue(() => {})).toBeTruthy();
        expect(_.isValue(new Date())).toBeTruthy();
        expect(_.isValue()).toBeFalsy();
        expect(_.isValue(null)).toBeFalsy();
    });

    it('isArray', () => {
        expect(_.isArray(new Array(0))).toBeTruthy();
        expect(_.isArray([])).toBeTruthy();
        expect(_.isArray()).toBeFalsy();
    });
    it('isNotEmptyArray', () => {
        expect(_.isNotEmptyArray(new Array(1))).toBeTruthy();
        expect(_.isNotEmptyArray([1])).toBeTruthy();
        expect(_.isNotEmptyArray(new Array(0))).toBeFalsy();
        expect(_.isNotEmptyArray([])).toBeFalsy();
        expect(_.isNotEmptyArray()).toBeFalsy();
    });

    it('isNumber', () => {
        expect(_.isNumber(1)).toBeTruthy();
        expect(_.isNumber(1)).toBeTruthy();
        expect(_.isNumber(0)).toBeTruthy();
        expect(_.isNumber(0.1)).toBeTruthy();
        expect(_.isNumber(NaN)).toBeTruthy();
        expect(_.isNumber(Infinity)).toBeTruthy();
        expect(_.isNumber('1')).toBeFalsy();
        expect(_.isNumber()).toBeFalsy();
    });
    it('isFiniteNumber', () => {
        expect(_.isFiniteNumber(1)).toBeTruthy();
        expect(_.isFiniteNumber(0)).toBeTruthy();
        expect(_.isFiniteNumber(0.1)).toBeTruthy();
        expect(_.isFiniteNumber(NaN)).toBeFalsy();
        expect(_.isFiniteNumber(Infinity)).toBeFalsy();
        expect(_.isFiniteNumber('1')).toBeFalsy();
        expect(_.isFiniteNumber()).toBeFalsy();
    });
    it('isInteger', () => {
        expect(_.isInteger(1)).toBeTruthy();
        expect(_.isInteger(0)).toBeTruthy();
        expect(_.isInteger(0.1)).toBeFalsy();
        expect(_.isInteger(NaN)).toBeFalsy();
        expect(_.isInteger(Infinity)).toBeFalsy();
        expect(_.isInteger('')).toBeFalsy();
        expect(_.isInteger()).toBeFalsy();
    });
    it('isFloat', () => {
        expect(_.isFloat(0.1)).toBeTruthy();
        expect(_.isFloat(0)).toBeFalsy();
        expect(_.isFloat(NaN)).toBeFalsy();
        expect(_.isFloat(Infinity)).toBeFalsy();
        expect(_.isFloat('')).toBeFalsy();
        expect(_.isFloat()).toBeFalsy();
    });


    it('isString', () => {
        expect(_.isString('')).toBeTruthy();
        expect(_.isString(0)).toBeFalsy();
        expect(_.isString(false)).toBeFalsy();
        expect(_.isString(() => {})).toBeFalsy();
        expect(_.isString(null)).toBeFalsy();
        expect(_.isString()).toBeFalsy();
    });
    it('isNotEmptyString', () => {
        expect(_.isNotEmptyString('asd')).toBeTruthy();
        expect(_.isNotEmptyString('')).toBeFalsy();
    });

    it('isObject', () => {
        expect(_.isObject(new Object())).toBeTruthy();
        expect(_.isObject({})).toBeTruthy();
        expect(_.isObject(null)).toBeFalsy();
        expect(_.isObject()).toBeFalsy();
    });

    it('isFunction', () => {
        expect(_.isFunction(new Function())).toBeTruthy();
        expect(_.isFunction(function () {})).toBeTruthy();
        expect(_.isFunction(()=> {})).toBeTruthy();
        expect(_.isFunction()).toBeFalsy();
    });

    it('isBool', () => {
        expect(_.isBool(true)).toBeTruthy();
        expect(_.isBool(false)).toBeTruthy();
        expect(_.isBool('true')).toBeFalsy();
        expect(_.isBool(0)).toBeFalsy();
        expect(_.isBool(null)).toBeFalsy();
        expect(_.isBool()).toBeFalsy();
    });
    it('isStructure', () => {
        expect(_.isStructure([])).toBeTruthy();
        expect(_.isStructure({})).toBeTruthy();
        expect(_.isStructure(1)).toBeFalsy();
        expect(_.isStructure('')).toBeFalsy();
        expect(_.isStructure(true)).toBeFalsy();
        expect(_.isStructure(null)).toBeFalsy();
        expect(_.isStructure(() => {})).toBeFalsy();
    });
});