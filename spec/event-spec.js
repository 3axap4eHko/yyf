'use strict';

import {on, once, un, go, list} from '../src/event';

describe('Event test suite:', () => {

    it('Should listen events:', done => {
        const context = {};
        on(context, 'testEvent', done);
        go(context, 'testEvent');
    });

    it('Should catch event exceptions:', () => {
        const context = {};
        const error = new Error();
        on(context, 'testEvent', () => {throw error});
        expect(() => go(context, 'testEvent')).not.toThrowError();
        expect(go(context, 'testEvent')).toEqual([error])
    });
    it('Should listen once events:', () => {
        const context = {};
        once(context, 'testEvent', () => {});
        expect(go(context, 'testEvent').length).toEqual(1);
        expect(go(context, 'testEvent').length).toEqual(0);
    });
    it('Should unlisten events:', () => {
        const context = {};
        const callback = () => {};
        on(context, 'testEvent', callback);
        expect(go(context, 'testEvent').length).toEqual(1);
        un(context, 'testEvent', callback);
        expect(go(context, 'testEvent').length).toEqual(0);
    });
    it('Should unlisten all events:', () => {
        const context = {};
        const count = 5;
        for(let i = 0; i < count; i ++) {
            on(context, 'testEvent', () => {});
        }
        expect(go(context, 'testEvent').length).toEqual(count);
        un(context, 'testEvent');
        expect(go(context, 'testEvent').length).toEqual(0);
    });
    it('Should return events result:', () => {
        const context = {};
        const results = [1,2,3,4,5];
        for(let v of results) {
            on(context, 'testEvent', () => v);
        }
        expect(go(context, 'testEvent')).toEqual(results);
    });
    it('Should return events list:', () => {
        const context = {};
        expect(list(context)).toEqual([]);
        on(context, 'testEvent', () => v);
        expect(list(context)).toEqual(['testEvent']);
    });

});