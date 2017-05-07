'use strict';

import $private from '../src/private-scope';

describe('Private context test suit', () => {
    it('Should create context without errors', () => {
        expect($private).not.toThrow();
    });

    it('Private context should be a function', () => {
        const $p = $private();
        expect($p instanceof Function).toBeTruthy()
    });

    it('Private context should store a value', () => {
        const $p = $private();
        const value = 'This is a test value';
        const context = {};

        $p(context, {value});
        expect($p(context).value).toEqual(value);
    });

    it('Private context should store a few values', () => {
        const $p = $private();
        const value = 'This is a test value';
        const anotherValue = '';
        const context = {};

        $p(context, {value}, {anotherValue});
        expect($p(context).value).toEqual(value);
        expect($p(context).anotherValue).toEqual(anotherValue);
    });
});