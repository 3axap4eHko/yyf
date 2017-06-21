import pool, { poolIterator } from '../src/pool';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

describe('Pool test suite:', () => {

  it('Should not fail on an empty pool', function (done) {
    pool([], () => {})
      .then(results => {
        expect(results.length).toEqual(0);
        done();
      })
      .catch(error => expect(error).toBeUndefined());
  });

  it('Should handle pool', function (done) {
    const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    pool(testArray, (value, next) => next(2 * value), 1)
      .then(results => {
        expect(results.length).toEqual(testArray.length);
        testArray.forEach((value, id) => {
          expect(results[id]).toEqual(value * 2);
        });
        done();
      })
      .catch(error => expect(error).toBeUndefined());
  });

  it('Should handle pool', function (done) {

    let activePoolSize = 0;
    const testArray = Array.from({ length: 100 });
    const poolSize = 2;

    pool(testArray, (value, next) => {
      activePoolSize+=1;
      setTimeout(() => {
        activePoolSize-=1;
        next();
      }, 100);
      expect(activePoolSize <= poolSize).toBeTruthy();
    }, poolSize)
      .then(() => {
        done();
      })
      .catch(error => expect(error).toBeUndefined());
  });
  it('Should handle pool iterator', function (done) {

    let activePoolSize = 0;

    function generator() {
      let nextIndex = 0;

      return {
        next() {
          return nextIndex < 10 ?
            {value: nextIndex++, done: false} :
            {done: true};
        }
      };
    }
    const testIterator = generator();
    const poolSize = 2;

    poolIterator(testIterator, value => {
      activePoolSize+=1;
      expect(activePoolSize).toBeLessThanOrEqual(poolSize);
      return new Promise(resolve => setTimeout(() => {
        activePoolSize-=1;
        resolve(value * 2);
      }, 100));
    }, poolSize)
      .then(results => {
        expect(results.length).toEqual(10);
        results.forEach((value, id) => results.includes(id * 2));
        done();
      })
      .catch(error => expect(error).toBeUndefined());
  });

});