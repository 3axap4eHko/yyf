/**
 * Undo/Redo
 * @module Undo-Redo
 */

/**
 * Default history config
 * @type {{historyMaxSize: number}}
 */
export const config = {
  historyMaxSize: 100,
};

const historyMap = new WeakMap();

/**
 * Clear history
 *
 * @param context
 */
export function clear(context) {
  historyMap.set(context, { _undo: [], _redo: [] });
}
/**
 * Returns context history
 *
 * @param {Object} context
 * @returns {Object}
 */
function getHistory(context) {
  if (!historyMap.has(context)) {
    clear(context);
  }
  return historyMap.get(context);
}
/**
 * Execute action
 *
 * @param {Object} context
 * @param {*} data
 */
export function action(context, data) {
  const {_undo, _redo} = getHistory(context);
  if (_undo.length > config.historyMaxSize) {
    _undo.shift();
  }
  _undo.push(data);
  _redo.splice(0);
}
/**
 * Checks if undo exists
 *
 * @param {Object} context
 * @returns {boolean}
 */
export function hasUndo(context) {
  return !!getHistory(context)._undo.length;
}
/**
 * Checks if redo exists
 *
 * @param {Object} context
 * @returns {boolean}
 */
export function hasRedo(context) {
  return !!getHistory(context)._redo.length;
}
/**
 * Undo last action
 *
 * @param {Object} context
 * @returns {*}
 */
export function undo(context) {
  const { historyUndo, historyRedo } = getHistory(context);
  if (!historyUndo.length) {return false;}
  const data = historyUndo.pop();
  if (data) {
    historyRedo.push(data);
  }
  return data;
}
/**
 * ReDo las action
 *
 * @param {Object} context
 * @returns {*}
 */
export function redo(context) {
  const { historyUndo, historyRedo } = getHistory(context);
  if (!historyRedo.length) {return false;}
  const data = historyRedo.pop();
  if (data) {
    historyUndo.push(data);
  }
  return data;
}