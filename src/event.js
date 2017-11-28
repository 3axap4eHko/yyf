/**
 * Event manager
 * @module Event
 */

const eventsMap = new WeakMap();
/**
 * Returns event's listeners
 *
 * @param {Object} context
 * @param {string} eventName
 * @returns {Object}
 */
function getEvent(context, eventName) {
  if (!eventsMap.has(context)) {
    eventsMap.set(context, {});
  }
  const events = eventsMap.get(context);
  if (!events[eventName]) {
    events[eventName] = {
      listeners: [],
      meta: new WeakMap()
    };
  }
  return events[eventName];
}
/**
 * Adds listener to event
 *
 * @param {Object} event
 * @param {Function} callback
 * @param {Object} meta
 */
function addListener(event, callback, meta) {
  event.listeners.push(callback);
  event.meta.set(callback, meta);
}
/**
 * Listen event in specified context
 *
 * @param {Object} context
 * @param {string} eventName
 * @param {Function} callback
 * @param {Number} [priority]
 */
export function on(context, eventName, callback, priority = 0) {
  const event = getEvent(context, eventName);
  if (!event.meta.has(callback)) {
    addListener(event, callback, { priority });
  }
}
/**
 * Listen event in specified context till the first fire
 *
 * @param {Object} context
 * @param {string} eventName
 * @param {Function} callback
 * @param {number} [priority]
 */
export function once(context, eventName, callback, priority = 0) {
  const event = getEvent(context, eventName);
  if (!event.meta.has(callback)) {
    addListener(event, callback, { once: true, priority });
  }
}
/**
 * Delete event listener returns true on success
 *
 * @param {Object} event
 * @param {Function} callback
 * @param {number} [idx]
 * @returns {boolean}
 */
function deleteListener(event, callback, idx) {
  if ((idx = event.listeners.indexOf(callback)) >= 0) {
    event.listeners.splice(idx, 1);
    event.meta.delete(callback);
    return true;
  }
  return false;
}
/**
 * Delete event listeners from context
 *
 * @param {Object} context
 * @param {string} eventName
 * @param {...Function} callbacks
 */
export function un(context, eventName, ...callbacks) {
  const event = getEvent(context, eventName);
  if (callbacks.length) {
    callbacks.forEach(callback => deleteListener(event, callback));
  } else {
    event.listeners = [];
    event.meta = new WeakMap();
  }
}
/**
 * Fire event in context
 *
 * @param {Object} context
 * @param {String} eventName
 * @param {...any} args
 * @returns {Array.<any|Error>}
 */
export function go(context, eventName, ...args) {
  const event = getEvent(context, eventName);
  return event.listeners
    .map(callback => ({ callback, meta: event.meta.get(callback) }))
    .sort((listener1, listener2) => listener1.meta.priority - listener2.meta.priority)
    .map(listener => {
      try {
        return listener.callback(...args);
      } catch (e) {
        return e;
      } finally {
        if (listener.meta.once) {
          deleteListener(event, listener.callback);
        }
      }
    });
}
/**
 * Returns list of context events
 *
 * @param {Object} context
 * @returns {Array.<string>}
 */
export function list(context) {
  return Object.keys(eventsMap.get(context) || {});
}
