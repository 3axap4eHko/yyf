import pool from '../src/pool';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

function delay(timeout, value) {
  return new Promise(resolve => setTimeout(resolve, timeout, value));
}

describe('Pool test suite:', () => {

  it('Should not fail on an empty pool', function (done) {
    pool([], () => {})
      .then(results => {
        expect(results.length).toEqual(0);
        done();
      })
      .catch(error => expect(error).toBeUndefined());
  });

  it('Should handle pool iterator', function (done) {

    let activePoolSize = 0;
    const poolSize = 2;

    pool([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], value => {
      activePoolSize += 1;
      expect(activePoolSize).toBeLessThanOrEqual(poolSize);
      return new Promise(resolve => setTimeout(() => {
        activePoolSize -= 1;
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

  it('Should handle pool iterator items before exception', function (done) {

    let counter = 0;
    const poolSize = 4;

    pool([3, 2, 1, 0], value => {
      if (value === 3) {
        throw new Error();
      }

      return delay(value * 100, value * 2)
        .then(result => {
          counter++;
          return result;
        });
    }, poolSize)
      .then(() => done(new Error()))
      .catch(error => {
        expect(error.size).toEqual(0);
        expect(counter).toEqual(poolSize - 1);
        done();
      });
  });

});