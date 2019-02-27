import tasksSynch from '../src/tasks-synch';

describe('tasksSynch方法测试：', () => {
  it('多任务依序同步进行', done => {
    let value = 'init';
    let count = 0;
    tasksSynch([
      () => new Promise((resolve, reject) => {
        value = 'task 1 start';
        window.setTimeout(() => {
          value = 'task 1 end'
          resolve();
        }, 25);
      }),
      () => new Promise((resolve, reject) => {
        value = 'task 2 start';
        window.setTimeout(() => {
          value = 'task 2 end';
          resolve();
        }, 30);
      }),
      () => new Promise((resolve, reject) => {
        value = 'task 3 start';
        window.setTimeout(() => {
          value = 'task 3 end';
          reject();
        }, 20);
      }),
    ], () => count++).then(() => {
      expect(value).toEqual('task 3 end');
      expect(count).toEqual(3);
      done();
    });
  });
});