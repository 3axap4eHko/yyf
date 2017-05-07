'use strict';

import Pipe from '../src/pipe';

describe("Pipe test suite:", () => {

    it('Pipe listen push test', done => {
        const testValue = Math.random();
        const pipe = new Pipe();
        pipe.listen( value => {
            expect(value).toEqual(testValue);
            done()
        });
        pipe.push(testValue);
    });

    it('Pipe close test', done => {
        const pipe = new Pipe();
        pipe.onClose(() => done());
        pipe.close();
    });

    it('Pipe map test', done => {
        const testValue = Math.random();
        const pipe = new Pipe();
        const pipeMap = pipe.map(value => `test${value}`);
        pipeMap.listen( value => {
            expect(value).toEqual(`test${testValue}`);
            done();
        });
        pipe.push(testValue);
    });

    it('Pipe reduce test', done => {
        const count = 10;
        const pipe = new Pipe();
        const pipeReduce = pipe.reduce((a, b) => a + b);
        var counter = 0;
        pipe.onClose(done);
        pipeReduce.listen( value => {
            expect(value).toEqual((++counter) * (counter + 1) / 2);
        });
        for (let i = 0; i < count; i++) {
            pipe.push(i)
        }
        pipe.close();
    });

    it('Pipe filter test', done => {
        const count = 100;
        const pipe = new Pipe();
        const pipeFilter = pipe.filter(value => value % 2 === 0);
        pipe.onClose(done);
        pipeFilter.listen( value => {
            expect(value % 2 === 0).toBeTruthy()
        });
        for (let i = 0; i < count; i++) {
            pipe.push(i);
        }
        pipe.close();
    });

    it('Pipe split test', done => {
        const testString = '1-2-3-4-5-6-7-8-9';
        const pipe = new Pipe();
        const pipeSplit = pipe.split(value => value.split('-'));
        pipe.onClose(done);
        pipeSplit.listen( value => {
            expect(testString.indexOf(value) % 2 === 0).toBeTruthy();
        });
        pipe.push(testString);
        pipe.close();
    });

    it('Pipe delay test', done => {
        const pipe = new Pipe();
        const pipeDelay = pipe.delay(200);
        pipeDelay.listen( value => {
            expect(Date.now() - value).toBeLessThan(220);
            done();
        });
        pipe.push(Date.now());
    });

    it('Pipe listen onetime test', done => {
        const pipe = new Pipe();
        const pipeDelay = pipe.delay(50);
        pipeDelay.listen(done, true);
        pipe.push(Date.now());
    });

    it('Pipe throttle test', done => {
        const count = 100;
        const pipe = new Pipe();
        const pipeThrottle = pipe.throttle(100);
        pipeThrottle.onClose(done);
        pipeThrottle.listen( values => {
            expect(values.length).toEqual(count + 1);
            expect(Date.now() - values[0]).toBeLessThan(120);
            pipeThrottle.close();
        });
        pipe.push(Date.now());
        for (let i = 0; i < count; i++) {
            pipe.push(i);
        }
    });

    it('Pipe fromInterval', done => {
        const count = 100;
        const start = Date.now();
        const pipe = Pipe.fromInterval(10);
        pipe.onClose(done);
        pipe.listen( value => {
            expect(Date.now() - start).toBeLessThan(start + (value + 1)*10);
            if (value > count) pipe.close();
        });
    });
});