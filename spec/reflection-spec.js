'use strict';

import * as R from '../src/reflection';
import {isValue} from '../src/check';

describe('Reflection rest suite', () => {

    it('walk test', () => {
        const testValue = {a: {b: {c: 1}}};
        var counter = 0;
        R.walk(testValue, (value, path, isBranch) => {
            counter++;
            if (!isBranch) {
                expect(value).toEqual(1);
                expect(path).toEqual(['a','b','c']);
            }
        });
        expect(counter).toEqual(3);
    });
    it('walk recursive test', () => {
        const testValue = {a: {b: {c: {}}}};
        var counter = 0;

        testValue.a.b.c.d = testValue;
        R.walk(testValue, () => {
            counter++;
        });
        expect(counter).toEqual(3);
    });

    it('merge:', () => {
        var a = {a: {aa: 1, ab: 1, ac: null}},
            a1 = {a: {aa: 1, ab: 1, ac: null}},
            a2 = {a: {aa: 2, ab: 2, ac: null}},
            b = {b: {ba: 2, bb: 2, bc: null}},
            ab = {a: {aa: 1, ab: 1, ac: null}, b: {ba: 2, bb: 2, bc: null}};
        expect(a).toEqual(a1);
        expect(R.merge(a1, b)).toEqual(ab);
        expect(a).not.toEqual(a1);
        expect(b).not.toEqual(ab);
        expect(R.merge(b, a)).toEqual(ab);
        expect(a).not.toEqual(a2);
        expect(R.merge(a, a2)).toEqual(a2);
    });

    describe('clone:', () => {
        var a = {a: {aa: {}, ab: [], ac: 1, ad: '', ae: true, f: null}, b: [], c: 1, d: '', e: true, f: null};
        var b = R.clone(a);
        it('B should be extended from A', () => {
            expect(a).toEqual(b);
            expect(a).not.toBe(b);
            Object.keys(a).forEach(key => expect(typeof a[key]).toEqual(typeof b[key]));
        });
        it('Clone should avoid circular reference', () => {
            b.g = b;
            expect(() => R.clone(b)).not.toThrow();
        });
    });

    it('freeze:', () => {
        const target = {a: {aa: {}, ab: [], ac: 1, ad: '', ae: true, f: null}, b: [], c: 1, d: '', e: true, f: null};
        R.freeze(target);
        R.walk(target, value => {
            if (isValue(value)) {
                expect(Object.isFrozen(value)).toBeTruthy()
            }
        });
        expect(target).toBeTruthy()
    });
    it('proxy:', () => {
        var operations = 0;
        const target = {a: {aa: {}, ab: [], ac: 1, ad: '', ae: true, f: null}, b: [], c: 1, d: '', e: true, f: null};
        const handler = {
            get (targetPath, target, name) {
                operations++;
                return target[name];
            },
            set(targetPath, target, name, value) {
                operations++;
                target[name] = value;
                return true;
            },
            deleteProperty(targetPath, target, name) {
                operations++;
                delete target[name];
                return true;
            }
        };
        const proxy = R.proxy(target, handler);
        proxy.a.aa.aaa = 2;
        delete proxy.a.f;
        expect(operations).toEqual(5);
    });

});