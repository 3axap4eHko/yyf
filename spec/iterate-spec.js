'use strict';

import * as Check from '../src/check';
import * as Cast from '../src/cast';
import * as _ from '../src/iterate';

const testLength = 11;
const testHalfLength = 5;

function genArray() {
    return new Array(testLength).fill(1).map((v, id) => id - 5);
}

function genObject() {
    return new Array(testLength).fill('a').reduce((c, v, id) => {
        var key = String.fromCharCode(v.charCodeAt(0) + id);
        c[key] = id - 5;
        return c;
    }, {});
}

function genString() {
    return new Array(testLength).fill('a').map((v, id) => String.fromCharCode(v.charCodeAt(0) + id)).join('');
}

const testArray = genArray();
const testHalfArray = testArray.slice(-testHalfLength);
const testObject = genObject();
const testHalfObject = Object
    .keys(testObject)
    .filter( (key, id) => id > testHalfLength)
    .reduce( (result, key) => {
        result[key] = testObject[key];
        return result;
    }, {});
const testString = genString();
const testHalfString = testString.substr(testHalfLength + 1);
const zero = 0;
const one = 1;
const oneHundred = 100;
const aChar = 'a';
const aCharCode = aChar.charCodeAt(0);
const zChar = 'z';
const zCharCode = zChar.charCodeAt(0);


describe('Iterate test suite:',() => {
    describe('range:', () => {
        it('range should create a filled or not array', () => {
            expect(_.range(testLength)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    });

    describe('keys:', () => {
        it('Array keys should be numbers', () => {
            _.keys(testArray).forEach(key => expect(Check.is(key, Number)).toBeTruthy());
            expect(_.keys(testArray)).toEqual(Object.keys(testArray).map(Cast.toInt));
            expect(_.keys(testArray).length).toEqual(testLength);
        });
        it('Object keys should be strings', () => {
            _.keys(testObject).forEach(key => expect(Check.is(key, String)).toBeTruthy());
            expect(_.keys(testObject)).toEqual(Object.keys(testObject));
            expect(_.keys(testObject).length).toEqual(testLength);
        });
        it('String keys should be numbers', () => {
            _.keys(testString).forEach(key => expect(Check.is(key, Number)).toBeTruthy());
            expect(_.keys(testString)).toEqual(Object.keys(testString).map(Cast.toInt));
            expect(_.keys(testString).length).toEqual(testLength);
        });
        it('Number keys should be an array', () => {
            expect(_.keys(testLength).length).toEqual(testLength);
        });
    });
    describe('values:', () => {
        it('Array values should be equal to index value', () => {
            _.values(testArray).forEach((value, idx) => expect(value).toEqual(testArray[idx]));
            expect(_.keys(testArray).length).toEqual(testLength);
        });
        it('Object values should be equal property value', () => {
            var keys = Object.keys(testObject);
            _.values(testObject).forEach((value, idx) => expect(value).toEqual(testObject[keys[idx]]));
            expect(_.keys(testObject).length).toEqual(testLength);
        });
        it('String values should be equal to index value', () => {
            _.values(testString).forEach((value, idx) => expect(value).toEqual(testString[idx]));
            expect(_.keys(testString).length).toEqual(testLength);
        });
    });

    describe('pairs:', () => {
        it('Array pairs should be numbers keys and number values', () => {
            var pairs = _.pairs(testArray);
            pairs.forEach(pair => {
                expect(Check.is(pair.key, Number)).toBeTruthy();
                expect(Check.is(pair.value, Number)).toBeTruthy();
                expect(pair.value).toEqual(testArray[pair.key]);
            });
            expect(pairs.length).toEqual(testLength);
        });
        it('Object pairs should be strings keys and numbers values', () => {
            var pairs = _.pairs(testObject);
            pairs.forEach(pair => {
                expect(Check.is(pair.key, String)).toBeTruthy();
                expect(Check.is(pair.value, Number)).toBeTruthy();
                expect(pair.value).toEqual(testObject[pair.key]);
            });
            expect(pairs.length).toEqual(testLength);
        });
        it('String values should be equal to index value', () => {
            var pairs = _.pairs(testString);
            pairs.forEach(pair => {
                expect(Check.is(pair.key, Number)).toBeTruthy();
                expect(Check.is(pair.value, String)).toBeTruthy();
                expect(pair.value).toEqual(testString[pair.key]);
            });
            expect(pairs.length).toEqual(testLength);
        });
    });

    describe('each:', () => {
        it('each should iterate an array', () => {
            _.each(testArray, (value, id) => expect(value).toEqual(testArray[id]));
        });
        it('each should iterate an object', () => {
            _.each(testObject, (value, id) => expect(value).toEqual(testObject[id]));
        });
        it('each should iterate a string', () => {
            _.each(testString, (value, id) => expect(value).toEqual(testString[id]));
        });
    });

    describe('every:', () => {
        it('every should iterate an array', () => {
            expect(_.every(testArray, (value, id) => value < oneHundred && value === testArray[id])).toBeTruthy();
            expect(_.every(testArray, (value, id) => value > oneHundred && value === testArray[id])).toBeFalsy();
        });
        it('every should iterate an object', () => {
            expect(_.every(testObject, (value, id) => value < oneHundred && value === testObject[id])).toBeTruthy();
            expect(_.every(testObject, (value, id) => value > oneHundred && value === testObject[id])).toBeFalsy();
        });
        it('every should iterate a string', () => {
            expect(_.every(testString, (value, id) => value < zChar && value === testString[id])).toBeTruthy();
            expect(_.every(testString, (value, id) => value > zChar && value === testString[id])).toBeFalsy();
        });
    });

    describe('any:', () => {
        it('any should iterate an array', () => {
            expect(_.any(testArray, value => value != oneHundred)).toBeTruthy();
            expect(_.any(testArray, value => value == oneHundred)).toBeFalsy();
        });
        it('any should iterate an object', () => {
            expect(_.any(testObject, value => value != oneHundred)).toBeTruthy();
            expect(_.any(testObject, value => value == oneHundred)).toBeFalsy();
        });
        it('any should iterate a string', () => {
            expect(_.any(testString, value => value == aChar)).toBeTruthy();
            expect(_.any(testString, value => value == zChar)).toBeFalsy();
        });
    });

    describe('repeat:', () => {
        it('repeat should do something x times', () => {
            var times = testLength;
            _.repeat(times, (i) => expect(i).toEqual(testLength - (times--)));
            expect(times).toEqual(0);
        });
    });

    describe('repeatHandled:', () => {
        it('repeatHandled should do something x times and handle every result', () => {
            const total = 10;
            var times = total;
            _.repeatHandled(times,
                (i) => (expect(i).toEqual(total - times), i),
                (i) => expect(i + times--).toEqual(total)
            );
            expect(times).toEqual(0);
        });
    });

    describe('repeatWhile:', () => {
        it('repeatWhile should do something x times and until callback is not falsy', () => {
            var times = testLength;
            _.repeatWhile(times, i => {
                expect(i).toEqual(testLength - (times--));
                return times > testHalfLength;
            });
            expect(times).toEqual(testHalfLength);
        });
    });

    describe('map:', () => {
        var mapOperation = value => value + 1;
        it('map should map an array', () => {
            var mappedArray = _.map(testArray, mapOperation);
            expect(Check.isArray(mappedArray)).toBeTruthy();
            expect(mappedArray.length).toEqual(testLength);
            _.each(mappedArray, (value, id) => expect(value).toEqual(mapOperation(testArray[id])));
        });
        it('map should map an object', () => {
            var mappedObject = _.map(testObject, mapOperation);
            expect(Check.isObject(mappedObject)).toBeTruthy();
            expect(Object.keys(mappedObject).length).toEqual(testLength);
            _.each(mappedObject, (value, key) => expect(value).toEqual(mapOperation(testObject[key])));
        });
        it('map should map a string', () => {
            var mappedString = _.map(testString, value => String.fromCharCode(value.charCodeAt(zero) + one));
            expect(mappedString.length).toEqual(testLength);
            _.each(mappedString, (value, key) => expect(value.charCodeAt(zero)).toEqual(testString[key].charCodeAt(zero) + one));
        });
    });

    describe('reduce:', () => {
        it('reduce should reduce an array', () => {
            var sum = _.reduce(testArray, (cur, next, key) => cur + next);
            expect(sum).toEqual(zero);
        });
        it('reduce should reduce an object', () => {
            var objectKeysString = _.reduce(testObject, (cur, next, key) => cur + key.toUpperCase(), '');
            expect(objectKeysString).toEqual(Object.keys(testObject).join('').toUpperCase());
        });
        it('reduce should reduce a string', () => {
            var newString = _.reduce(testString, (cur, next, idx) => cur + next.toUpperCase(), '');
            expect(newString).toEqual(testString.toUpperCase());
        });
    });

    describe('groupOf:', () => {
        it('groupOf should group an array', () => {
            var groups = _.groupOf(testArray, 2);
            groups.forEach(group => {
                expect(group.length).toBeLessThan(3);
                expect(group.length).toBeGreaterThan(0);
                expect(Check.isArray(group)).toBeTruthy();
            });
        });
        it('groupOf should group an object', () => {
            var groups = _.groupOf(testObject, 2);
            groups.forEach(group => {
                const keys = _.keys(group);
                expect(keys.length).toBeLessThan(3);
                expect(keys.length).toBeGreaterThan(0);
                expect(Check.isObject(group)).toBeTruthy();
            });
        });
        it('groupOf should group an string', () => {
            var groups = _.groupOf(testString, 2);
            groups.forEach(group => {
                expect(group.length).toBeLessThan(3);
                expect(group.length).toBeGreaterThan(0);
                expect(Check.isString(group)).toBeTruthy();
            });
        });
    });

    describe('groupRightOf:', () => {
        it('groupRightOf should group an array', () => {
            var groups = _.groupRightOf(testArray, 2);
            groups.forEach(group => {
                expect(group.length).toBeLessThan(3);
                expect(group.length).toBeGreaterThan(0);
                expect(Check.isArray(group)).toBeTruthy();
            });
        });
        it('groupRightOf should group an object', () => {
            var groups = _.groupRightOf(testObject, 2);
            groups.forEach(group => {
                const keys = _.keys(group);
                expect(keys.length).toBeLessThan(3);
                expect(keys.length).toBeGreaterThan(0);
                expect(Check.isObject(group)).toBeTruthy();
            });
        });
        it('groupRightOf should group an string', () => {
            var groups = _.groupRightOf(testString, 2);
            groups.forEach(group => {
                expect(group.length).toBeLessThan(3);
                expect(group.length).toBeGreaterThan(0);
                expect(Check.isString(group)).toBeTruthy();
            });
        });
    });

    describe('filter:', () => {
        it('filter should filter an array', () => {
            var halfValue = testArray[testHalfLength];
            var filteredArray = _.filter(testArray, value => value > halfValue);
            expect(filteredArray.every(value => value > halfValue)).toBeTruthy();
        });
        it('filter should filter an object', () => {
            var halfValue = testObject[Object.keys(testObject)[testHalfLength]];
            var filteredObject = _.filter(testObject, value => value > halfValue);
            expect(Object.keys(filteredObject).every(key => filteredObject[key] > halfValue)).toBeTruthy();
        });
        it('filter should filter a string', () => {
            var halfValue = testString[testHalfLength];
            var filteredString = _.filter(testString, value => value > halfValue);
            expect(Object.keys(filteredString).every(key => filteredString[key] > halfValue)).toBeTruthy();
        });
    });

    describe('exclude:', () => {
        it('exclude of array', () => {
            const keys = [0,1,2,3,4,5];
            expect(_.exclude(testArray, keys)).toEqual(testHalfArray)
        });
        it('exclude of object', () => {
            const keys = ['a','b','c','d','e','f'];
            expect(_.exclude(testObject, keys)).toEqual(testHalfObject)
        });
        it('exclude of string', () => {
            const keys = [0,1,2,3,4,5];
            expect(_.exclude(testString, keys)).toEqual(testHalfString)
        });
    });

    describe('extract:', () => {
        it('extract of array', () => {
            const keys = [6,7,8,9,10];
            expect(_.extract(testArray, keys)).toEqual(testHalfArray)
        });
        it('extract of object', () => {
            const keys = ['g','h','i','j','k'];
            expect(_.extract(testObject, keys)).toEqual(testHalfObject)
        });
        it('extract of string', () => {
            const keys = [6,7,8,9,10];
            expect(_.extract(testString, keys)).toEqual(testHalfString)
        });
    });

    describe('first:', () => {
        it('first should select first pair from an array', () => {
            var first = _.first(testArray, (value, key) => value > zero);
            expect(first.key).toEqual(testHalfLength + 1);
            expect(first.value).toEqual(zero + 1);
            expect(first.value).toEqual(testArray[first.key]);
        });
        it('first should select first pair from an object', () => {
            var first = _.first(testObject, (value, key) => value > zero);
            expect(first.key).toEqual('g');
            expect(first.value).toEqual(zero + 1);
            expect(first.value).toEqual(testObject[first.key]);
        });
        it('first should select first pair from a string', () => {
            var first = _.first(testString, (value, key) => key > testHalfLength);
            expect(first.key).toEqual(6);
            expect(first.value).toEqual(testString[first.key]);
        });
    });

    describe('last:', () => {
        it('last should select last pair from an array', () => {
            var last = _.last(testArray, (value, key) => value < zero);
            expect(last.key).toEqual(testHalfLength - 1);
            expect(last.value).toEqual(zero - 1);
            expect(last.value).toEqual(testArray[last.key]);
        });
        it('last should select last pair from an object', () => {
            var last = _.last(testObject, (value, key) => value < zero);
            expect(last.key).toEqual('e');
            expect(last.value).toEqual(zero - 1);
            expect(last.value).toEqual(testObject[last.key]);
        });
        it('last should select last pair from a string', () => {
            var last = _.last(testString, (value, key) => key < testHalfLength);
            expect(last.key).toEqual(testHalfLength - 1);
            expect(last.value).toEqual(testString[last.key]);
        });
    });

    describe('compare:', () => {
        it('lastReduce should select from an array', () => {
            var selected = _.compare(testArray, (cur, next, key) => next === zero);
            expect(selected.key).toEqual(testHalfLength);
            expect(selected.value).toEqual(zero);
            expect(selected.value).toEqual(testArray[selected.key]);
        });
        it('compare should select from an object', () => {
            var selected = _.compare(testObject, (cur, next, key) => next === zero);
            expect(selected.key).toEqual('f');
            expect(selected.value).toEqual(zero);
            expect(selected.value).toEqual(testObject[selected.key]);
        });
        it('compare should select from a string', () => {
            var selected = _.compare(testString, (cur, next, idx) => testHalfLength == idx);
            expect(selected.key).toEqual(testHalfLength);
            expect(selected.value).toEqual(testString[selected.key]);
        });
    });

    describe('take:', () => {
        it('take should take first pair from an array', () => {
            var testArray = genArray();
            var taked = _.take(testArray, (value, key) => value == zero);
            expect(taked.key).toEqual(testHalfLength);
            expect(testArray.length).toEqual(testLength - 1);
        });
        it('take should take first pair from an object', () => {
            var testObject = genObject();
            var taked = _.take(testObject, (value, key) => value == zero);
            expect(taked.key).toEqual('f');
            expect(testObject[taked.key]).not.toBeDefined();
        });
    });

    describe('compareTake:', () => {
        it('compareTake should take pair from an array', () => {
            var testArray = genArray();
            var taken = _.compareTake(testArray, (curValue, nextValue, idx) => nextValue == zero);
            expect(taken.key).toEqual(testHalfLength);
            expect(testArray.length).toEqual(testLength - 1);
        });
        it('compareTake should take pair from an object', () => {
            var testObject = genObject();
            var taken = _.compareTake(testObject, (curValue, nextValue, key) => nextValue == zero);
            expect(taken.key).toEqual('f');
            expect(testObject[taken.key]).not.toBeDefined();
        });
    });

    describe('countOf:', () => {
        it('countOf should count an array', () => {
            var count = _.countOf(testArray, v => v > 0);
            expect(count).toEqual(testHalfLength);
        });
        it('countOf should count an object', () => {
            var count = _.countOf(testObject, v => v > 0);
            expect(count).toEqual(testHalfLength);
        });
        it('countOf should count a string', () => {
            var count = _.countOf(testString, v => v > String.fromCharCode(aCharCode + testHalfLength));
            expect(count).toEqual(testHalfLength);
        });
    });
});