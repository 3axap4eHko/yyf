'use strict';

import {push, wait} from '../src/task';

describe('Task test suite:', () => {
    const context = {};
    function add2(arg, complete) {
        complete(arg.result += 2);
    }
    function mul2(arg, complete) {
        complete(arg.result *= 2);
    }
    const taskImmediateList = [add2, mul2];
    const taskDelayedList = taskImmediateList.map( (task, id) => (arg, complete) => setTimeout(task, 100 * (taskImmediateList.length - id), arg, complete));

    push(context, 'immediate', taskImmediateList);
    push(context, 'delayed', taskDelayedList);

    it('Should not fail on an empty pool', function (done) {
        wait(context, 'empty').then(results => {
            expect(results.length).toEqual(0);
            done();
        }).catch(error => expect(error).toBeUndefined());
    });

    it('Should wait immediate pool', function (done) {
        var arg = {result: 2};
        wait(context, 'immediate', 1, arg).then(results => {
            expect(results.length).toEqual(taskImmediateList.length);
            expect(arg.result).toEqual(8); // (2+2)*2
            done();
        }).catch(error => expect(error).toBeUndefined());
    });
    it('Should wait delayed pool as immediate', function (done) {
        var arg = {result: 2};
        wait(context, 'delayed', 1, arg).then(results => {
            expect(results.length).toEqual(taskDelayedList.length);
            expect(arg.result).toEqual(8); // (2+2)*2
            done();
        }).catch(error => expect(error).toBeUndefined());
    });
    it('Should wait delayed pool', function (done) {
        var arg = {result: 2};
        wait(context, 'delayed', 0, arg).then(results => {
            expect(results.length).toEqual(taskDelayedList.length);
            expect(arg.result).toEqual(6); // 2+2*2
            done();
        }).catch(error => expect(error).toBeUndefined());
    });
});