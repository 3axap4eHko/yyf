'use strict';

import * as date from '../src/date';

describe('Format test suite:', () => {
  class DateMock {
    constructor(options) {
      this.options = options || {};
    }

    static create(_date) {
      return new DateMock({
        getDate: _date.getDate(),
        getDay: _date.getDay(),
        getMonth: _date.getMonth(),
        getFullYear: _date.getFullYear(),
        getHours: _date.getHours(),
        getMilliseconds: _date.getMilliseconds(),
        getMinutes: _date.getMinutes(),
        getSeconds: _date.getSeconds(),
        getTime: _date.getTime(),
        getTimezoneOffset: _date.getTimezoneOffset(),
        getYear: _date.getYear(),
        getUTCDate: _date.getUTCDate(),
        getUTCDay: _date.getUTCDay(),
        getUTCFullYear: _date.getUTCFullYear(),
        getUTCHours: _date.getUTCHours(),
        getUTCMilliseconds: _date.getUTCMilliseconds(),
        getUTCMinutes: _date.getUTCMinutes(),
        getUTCMonth: _date.getUTCMonth(),
        getUTCSeconds: _date.getUTCSeconds()
      });
    }

    getDate() {
      return this.options.getDate;
    }

    getDay() {
      return this.options.getDay;
    }

    getMonth() {
      return this.options.getMonth;
    }

    getFullYear() {
      return this.options.getFullYear;
    }

    getHours() {
      return this.options.getHours;
    }

    getMilliseconds() {
      return this.options.getMilliseconds;
    }

    getMinutes() {
      return this.options.getMinutes;
    }

    getSeconds() {
      return this.options.getSeconds;
    }

    getTime() {
      return this.options.getTime;
    }

    getTimezoneOffset() {
      return this.options.getTimezoneOffset;
    }

    getYear() {
      return this.options.getYear;
    }

    getUTCDate() {
      return this.options.getUTCDate;
    }

    getUTCDay() {
      return this.options.getUTCDay;
    }

    getUTCFullYear() {
      return this.options.getUTCFullYear;
    }

    getUTCHours() {
      return this.options.getUTCHours;
    }

    getUTCMilliseconds() {
      return this.options.getUTCMilliseconds;
    }

    getUTCMinutes() {
      return this.options.getUTCMinutes;
    }

    getUTCMonth() {
      return this.options.getUTCMonth;
    }

    getUTCSeconds() {
      return this.options.getUTCSeconds;
    }
  }

  it('dateToXsd should return xsd date format', () => {
    const _date = new Date(2015, 10, 27, 18, 25, 45, 100),
      mockDate = DateMock.create(_date);
    mockDate.options.getTimezoneOffset = 300;
    expect(date.dateToXsd(mockDate)).toEqual('2015-11-27T18:25:45+05:00');
    mockDate.options.getTimezoneOffset = 0;
    expect(date.dateToXsd(mockDate)).toEqual('2015-11-27T18:25:45Z');
    mockDate.options.getTimezoneOffset = -300;
    expect(date.dateToXsd(mockDate)).toEqual('2015-11-27T18:25:45-05:00');
  });
});
