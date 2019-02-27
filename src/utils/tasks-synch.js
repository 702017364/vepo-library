import noop from './noop.js';

/** 
 * 多任务依序同步进行
 * @param {Array} tasks 任务列表（每个任务都需要返回Promise或类型对象）
 * @param {Function} [callback=noop] 任务完成时的回调函数
 * @return {Promise} 返回值
 */
export default async (tasks, callback = noop) => {
  for(let i = 0, j = tasks.length; i < j; i++){
    await tasks[i]().then(callback, callback);
  }
};