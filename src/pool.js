/**
 * Pools and executes tasks
 * @module pool
 * @param {Array|Object|String|Function|Iterator} target
 * @param {Function} handler
 * @param {Number} [poolSize]
 *
 * @returns {Promise.<*>}
 * @example <caption>Multiply all values by 2 one by one</caption>
 * import pool from 'yyf/pool';
 *
 * const testArray = [0,1,2,3,4,5,6,7,8,9];
 * const poolSize = 1;
 * pool(testArray, value => 2*value, poolSize)
 *  .then(result => console.log(result)); // [0,2,4,6,8,10,12,14,16,18]
 */

export default function pool(target, handler, poolSize = 1) {
  let iterator = target;

  if (typeof iterator === 'function') {
    iterator = iterator();
  }

  if (Symbol.iterator in iterator) {
    iterator = iterator[Symbol.iterator]();
  } else if (typeof iterator.next !== 'function') {
    iterator = Object.values(iterator)[Symbol.iterator]();
  }

  return new Promise((resolve, reject) => {
    const results = [];
    let activePoolSize = 0;
    let error;

    const iterate = () => {
      const item = iterator.next();
      if (item.done || error) {
        if (activePoolSize === 0) {
          if (error) {
            error.size = activePoolSize;
            reject(error);
          } else {
            resolve(results);
          }
        }
        return;
      }
      activePoolSize++;
      new Promise(resolve => resolve(handler(item.value)))
        .then(result => results.push(result))
        .catch(e => error = e)
        .then(() => {
          activePoolSize--;
          iterate();
        });
    };

    while (poolSize--) { iterate();}
  });
}
