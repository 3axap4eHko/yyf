/**
 * Pools and executes tasks
 * @module Pool
 */
import { values } from './iterate';

/**
 * Pool target data to handler
 *
 * @param {Array|Object|string} target
 * @param {Function} handler
 * @param {Number} [maxPoolSize]
 * @return {Promise}
 * @example <caption>Multiply all values by 2 one by one</caption>
 *
 * const testArray = [0,1,2,3,4,5,6,7,8,9];
 * const poolSize = 1;
 * pool(testArray, (value, next) => next(2*value), poolSize)
 *  .then(result => console.log(result)); // [0,2,4,6,8,10,12,14,16,18]
 */
export default function (target, handler, maxPoolSize = 1) {
  return new Promise((resolve, reject) => {
    try {
      const data = values(target);
      if (data.length === 0) {
        return resolve([]);
      }
      const results = [];
      const dataPool = data.splice(0, maxPoolSize);
      const next = result => {
        dataPool.pop();
        results.push(result);
        if (data.length > 0) {
          dataPool.unshift(data.shift());
          handler(dataPool[0], result => setTimeout(next, 0, result));
        } else if (dataPool.length === 0) {
          resolve(results);
        }
      };

      dataPool.forEach(value => handler(value, result => setTimeout(next, 0, result)));
    } catch (error) {
      reject(error);
    }
  });

}
/**
 * Pool iterator to handler
 * @param {Iterator} iterator
 * @param {Function} handler
 * @param {Number} [maxPoolSize]
 *
 * @returns {Promise.<*>}
 * @example <caption>Multiply all values by 2 one by one</caption>
 *
 * const testArray = [0,1,2,3,4,5,6,7,8,9];
 * const poolSize = 1;
 * pool(testArray, value => 2*value, poolSize)
 *  .then(result => console.log(result)); // [0,2,4,6,8,10,12,14,16,18]
 */
export function poolIterator(iterator, handler, maxPoolSize = 1) {

  return new Promise((resolve, reject) => {
    const results = [];
    let poolSize = 0;

    const callback = () => {
      poolSize++;
      const nextItem = iterator.next();
      if (nextItem.done) {
        if (poolSize === 0) {
          resolve(results);
        }
        return;
      }
      Promise.resolve(handler(nextItem.value))
        .catch(reject)
        .then(result => {
          results.push(result);
          poolSize--;
          callback();
        });
    };

    while (maxPoolSize--) { callback();}
  });
}
