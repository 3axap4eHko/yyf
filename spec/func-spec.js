'use strict';

import {fnCurry, fnCurryRight, fnCompose} from '../src/func';

describe('Function test suite:', () => {
    it('curry', () => {
        const baseFn = (...args) =>  args;
        const curry123 = fnCurry(baseFn, 1, 2, 3);
        expect(baseFn(1,2,3,4,5)).toEqual([1,2,3,4,5]);
        expect(baseFn(1,2,3,4,5)).toEqual(curry123(4,5));
    });
    it('curryRight', () => {
        const baseFn = (...args) =>  args;
        const curry345 = fnCurryRight(baseFn, 3,4,5);
        expect(baseFn(1,2,3,4,5)).toEqual([1,2,3,4,5]);
        expect(baseFn(1,2,3,4,5)).toEqual(curry345(1,2));
    });
    it('compose', () => {
        const sumFn = (a, b) =>  a + b;
        const sqrFn = a =>  a * a;
        const composed = fnCompose(sumFn, sqrFn);
        expect(composed(1,1)).toEqual(4);
        expect(composed(2,2)).toEqual(16);
        expect(composed(3,3)).toEqual(36);
        expect(composed(4,4)).toEqual(64);
    });
});