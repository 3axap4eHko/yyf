'use strict';

import * as Rnd from '../src/random';
import {repeat} from '../src/iterate';
import {isFloat, isInteger} from '../src/check';

const testNumber = 100;
const testHalfNumber = 50;

describe('Random test suite:', () => {

    it('random() without args should return an float number', () => {
        expect(isFloat(Rnd.number())).toBeTruthy();
    });
    it('random() with first int arg should return an int number less than or equal to arg', () => {
        repeat(testNumber, () => {
            let value = Rnd.number(testNumber);
            expect(isInteger(value)).toBeTruthy();
            expect(value <= testNumber).toBeTruthy()
        });
    });
    it('random() with two int args should return an int number between args numbers', () => {
        repeat(testNumber, () => {
            let value = Rnd.number(testHalfNumber, testNumber);
            expect(isInteger(value)).toBeTruthy();
            expect(testHalfNumber >= value || value <= testNumber).toBeTruthy()
        });
    });
    it('randomArray() should return an array of floats', () => {
        repeat(testNumber, () => {
            let values = Rnd.array(testNumber);
            expect(values.every(isFloat)).toBeTruthy();
            expect(values.length).toEqual(testNumber);
        });
    });
    it('randomString() should return a random string', () => {
        repeat(testNumber, () => {
            let value = Rnd.string(testNumber);
            expect(/^[a-zA-Z]+$/.test(value)).toBeTruthy();
            expect(value.length).toEqual(testNumber);
        });
    });
    it('randomString() should return a random string', () => {
        repeat(testNumber, () => {
            let value = Rnd.string(testNumber);
            expect(/^[a-zA-Z]+$/.test(value)).toBeTruthy();
            expect(value.length).toEqual(testNumber);
        });
    });

    describe('randomGUID tests:', function () {
        const GUIDExpr = /^[\d\w]{8}\-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}$/;
        it('GUID should be according to the format and uniq', () => {
            const guids = {};
            repeat(1000, () => {
                const guid = Rnd.GUID();
                expect(guids.hasOwnProperty(guid)).toBeFalsy();
                expect(GUIDExpr.test(guid)).toBeTruthy();
                guids[guid] = guid;
            });
        });
    });

});