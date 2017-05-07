'use strict';

import pool from '../src/pool';

describe('Pool test suite:', () => {
    it('Should not fail on an empty pool', function (done) {
        pool([], () => {})
            .then( results => {
                expect(results.length).toEqual(0);
                done();
            })
            .catch(error => expect(error).toBeUndefined());
    });
    it('Should handle pool', function (done) {
        const testArray = [0,1,2,3,4,5,6,7,8,9];
        pool(testArray, (value, next) => next(2*value), 1)
            .then( results => {
                expect(results.length).toEqual(testArray.length);
                testArray.forEach( (value,id) => {
                    expect(results[id]).toEqual(value * 2);
                });
                done();
            })
            .catch(error => expect(error).toBeUndefined());
    });

});