import { on, once, un, go } from './event';

const EVENTS = {
  VALUE: 'value',
  ERROR: 'error',
  CLOSE: 'close'
};

function getArgCallback(pipe, onlyFirstArg) {
  if (onlyFirstArg) {
    return ((pipe, value) => pipe.push(value)).bind(null, pipe);
  }
  return ((pipe, ...values) => pipe.push(values)).bind(null, pipe);
}

const _closed = Symbol('Closed');
/**
 * Pipe class to pipe data as a stream
 * @module Pipe
 * @event Pipe#value
 * @event Pipe#error
 * @event Pipe#close
 */
export default class Pipe {
  /**
   * Create child pipe
   * @param {Pipe} parentPipe
   * @param {Function} pipingFunction
   * @return {Pipe}
   */
  static piping(parentPipe, pipingFunction) {
    const pipe = new Pipe();
    on(parentPipe, EVENTS.VALUE, value => pipingFunction(value, value => pipe.push(value)));
    return pipe;
  }

  /**
   * Merge pipes into one
   * @param {Array.<Pipe>} pipes
   * @return {Pipe}
   */
  static merge(...pipes) {
    const pipe = new Pipe();
    pipes.forEach(mergePipe => {
      on(mergePipe, EVENTS.VALUE, value => pipe.push(value));
    });
    return pipe;
  }

  /**
   * Creates a pipe from defined interval
   * @param {number} milliseconds
   * @return {Pipe}
   */
  static fromInterval(milliseconds) {
    const pipe = new Pipe();
    pipe.tick = 0;
    pipe.timerId = setInterval(() => pipe.push(++pipe.tick), milliseconds);
    pipe.onClose(() => clearInterval(pipe.timerId));
    return pipe;
  }

  /**
   * Creates a pipe from YYF Event
   * @param {Object} context
   * @param {string} eventName
   * @param {boolean} onlyFirstArg
   * @return {Pipe}
   */
  static fromYYFEvent(context, eventName, onlyFirstArg = true) {
    const pipe = new Pipe();
    const callback = getArgCallback(pipe, onlyFirstArg);
    pipe.context = context;
    pipe.eventName = eventName;
    on(context, eventName, callback);
    pipe.onClose(() => un(context, eventName, callback));


    return pipe;
  }

  /**
   * Creates a pipe from EventTarget event
   * @param {EventTarget} eventTarget
   * @param {string} eventName
   * @param {boolean} onlyFirstArg
   * @return {Pipe}
   */
  static fromEventTarget(eventTarget, eventName, onlyFirstArg = true) {
    const pipe = new Pipe();
    const callback = getArgCallback(pipe, onlyFirstArg);
    pipe.eventTarget = eventTarget;
    pipe.eventName = eventName;
    eventTarget.addEventListener(eventName, callback);
    pipe.onClose(() => eventTarget.removeEventListener(eventName, callback));

    return pipe;
  }

  /**
   * Creates a pipe from node EventEmitter
   * @param {EventEmitter} target
   * @param {string} eventName
   * @param {boolean} onlyFirstArg
   * @return {Pipe}
   */
  static fromEventEmitter(target, eventName, onlyFirstArg = true) {
    const pipe = new Pipe();
    const callback = getArgCallback(pipe, onlyFirstArg);
    pipe.target = target;
    pipe.eventName = eventName;
    target.addListener(eventName, callback);
    pipe.onClose(() => target.removeListener(eventName, callback));

    return pipe;
  }
  /**
   * Pushes value to the pipe
   *
   * @param {*} value
   * @returns {Pipe}
   */
  push = (value) => {
    try {
      if (this[_closed]) {
        throw new Error('Pipe is closed');
      }
      go(this, EVENTS.VALUE, value);
    } catch (error) {
      error.value = value;
      go(this, EVENTS.ERROR, error);
    }
    return this;
  };

  /**
   * Listen pipe for value
   *
   * @param {Function} listener
   * @param {boolean} [onetime]
   * @returns {Pipe}
   */
  listen = (listener, onetime) => {
    if (onetime) {
      once(this, EVENTS.VALUE, listener);
    } else {
      on(this, EVENTS.VALUE, listener);
    }
    return this;
  };

  /**
   * Listen pipe for errors
   *
   * @param {Function} listener
   * @returns {Pipe}
   */
  onError = (listener) => {
    on(this, EVENTS.ERROR, listener);
    return this;
  };

  /**
   * Listen pipe for closing
   *
   * @param {Function} listener
   * @returns {Pipe}
   */
  onClose = (listener) => {
    on(this, EVENTS.CLOSE, listener);
    return this;
  };

  /**
   * Closes pipe
   * @returns {Pipe}
   */
  close = () => {
    go(this, EVENTS.CLOSE);
    return this;
  };

  /**
   * Maps values to new pipe
   *
   * @param {Function|*} mapper
   * @returns {Pipe}
   */
  map = (mapper) => {
    if (mapper instanceof Function) {
      return Pipe.piping(this, (value, push) => push(mapper(value)));
    }
    return Pipe.piping(this, (value, push) => push(mapper));
  };

  /**
   * Reduces values to new pipe
   *
   * @param {Function} reducer
   * @param {*} [init]
   * @returns {Pipe}
   */
  reduce = (reducer, ...init) => {
    let lastValue;
    let handler = value => {
      lastValue = value;
      handler = (value, push) => push(lastValue = reducer(lastValue, value));
    };
    if (init.length) {
      handler(init[0]);
    }
    return Pipe.piping(this, (value, push) => handler(value, push));
  };

  /**
   * Filters values to new pipe
   *
   * @param {Function} filter
   * @returns {Pipe}
   */
  filter = (filter) => {
    return Pipe.piping(this, (value, push) => filter(value) && push(value));
  };

  /**
   * Splits value to values for new pipe
   *
   * @param {Function} splitter
   * @returns {Pipe}
   */
  split = (splitter) => {
    return Pipe.piping(this, (value, push) => Array.from(splitter(value)).forEach(value => push(value)));
  };

  /**
   * Delays pushing values to new pipe
   *
   * @param {number} milliseconds
   * @returns {Pipe}
   */
  delay = (milliseconds) => {
    const timers = [];
    const pipe = Pipe.piping(this, (value, push) => timers.push(setTimeout(push, milliseconds, value)));
    pipe.onClose(() => timers.forEach(clearTimeout));
    return pipe;
  };
  /**
   * Throttles values for specified period to new pipe
   *
   * @param {number} milliseconds
   * @returns {Pipe}
   */

  throttle = (milliseconds) => {
    const values = [];
    const pipe = Pipe.piping(this, value => values.push(value));
    const timerId = setInterval(() => pipe.push(values.splice(0)), milliseconds);
    pipe.onClose(() => clearInterval(timerId));
    return pipe;
  };

  /**
   * Throttles values for specified period and pass only latest one to new pipe
   *
   * @param {number} milliseconds
   * @returns {Pipe}
   */
  throttleLast = (milliseconds) => {
    const values = [];
    const pipe = Pipe.piping(this, value => values[0] = value);
    const timerId = setInterval(() => values.length && pipe.push(values.splice(0)[0]), milliseconds);
    pipe.onClose(() => clearInterval(timerId));
    return pipe;
  };
}
