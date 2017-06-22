/**
 * Task manager
 * @module Task
 */
import pool from './pool';

const _taskList = Symbol('Task list');

function _getTaskList(context, type) {
  if (!context[_taskList]) {
    context[_taskList] = {};
  }
  if (!context[_taskList][type]) {
    context[_taskList][type] = [];
  }
  return context[_taskList][type];
}

/**
 * Pushes the task(s) into context
 *
 * @param {Array|Object} context
 * @param {string} type
 * @param {Array.<Function>} [tasks]
 */
export function push(context, type, ...tasks) {
  if (tasks.length === 1 && Array.isArray(tasks[0])) {
    tasks = tasks[0];
  }
  const taskList = _getTaskList(context, type);
  taskList.push(...tasks);
}

/**
 * Deletes the task(s) from context
 *
 * @param {Object} context
 * @param {string} type
 * @param {...Array.<Function>} [tasks]
 */
export function remove(context, type, ...tasks) {
  if (tasks.length === 1 && Array.isArray(tasks)) {
    tasks = tasks[0];
  }
  const taskList = _getTaskList(context, type);
  tasks.forEach((task, idx) => {
    if (~(idx = taskList.indexOf(task))) {
      taskList.splice(idx, 1);
    }
  });
}
/**
 * Clears all context tasks
 *
 * @param {Object} context
 * @param {string} type
 */
export function clear(context, type) {
  const taskList = _getTaskList(context, type);
  taskList.splice(0);
}

/**
 * Waits for context tasks completion
 *
 * @param {Object} context Execution context
 * @param {string} type Tasks type
 * @param {number} [size] Execution pool size
 * @param {...*} [args] Arguments
 * @return {Promise}
 */
export function wait(context, type, size, ...args) {

  const taskList = _getTaskList(context, type);
  const handler = task => task(...args);

  return pool(taskList, handler, size);
}