import { push, wait } from '../src/task';

function delay(timeout, result) {
  return new Promise(resolve => setTimeout(resolve, timeout, result));
}

describe('Task test suite:', () => {
  const context = {};

  function add2(arg) {
    return arg.result += 2;
  }

  function mul2(arg) {
    return arg.result *= 2;
  }

  const taskImmediateList = [add2, mul2];
  const taskDelayedList = taskImmediateList
    .map((task, id) => arg => delay(100 * (taskImmediateList.length - id), arg).then(task));

  push(context, 'immediate', taskImmediateList);
  push(context, 'delayed', taskDelayedList);

  it('Should not fail on an empty pool', function (done) {
    wait(context, 'empty').then(results => {
      expect(results.length).toEqual(0);
      done();
    }).catch(error => expect(error).toBeUndefined());
  });

  it('Should wait immediate pool', function (done) {
    const arg = { result: 2 };
    wait(context, 'immediate', 1, arg).then(results => {
      expect(results.length).toEqual(taskImmediateList.length);
      expect(arg.result).toEqual(8); // (2+2)*2
      done();
    }).catch(error => expect(error).toBeUndefined());
  });
  it('Should wait delayed pool as immediate', function (done) {
    const arg = { result: 2 };
    wait(context, 'delayed', 1, arg).then(results => {
      expect(results.length).toEqual(taskDelayedList.length);
      expect(arg.result).toEqual(8); // (2+2)*2
      done();
    }).catch(error => expect(error).toBeUndefined());
  });
  it('Should wait delayed pool', function (done) {
    const arg = { result: 2 };
    wait(context, 'delayed', 2, arg).then(results => {
      expect(results.length).toEqual(taskDelayedList.length);
      expect(arg.result).toEqual(6); // 2+2*2
      done();
    }).catch(error => expect(error).toBeUndefined());
  });
});