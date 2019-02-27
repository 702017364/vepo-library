import closureCache from '@utils/closure-cache';

describe('closure-cache方法测试：', () => {
  it('多次调用返回函数，count只增加了一次', () => {
    let count = 0;
    const method = closureCache(() => count++);
    method();
    method();
    method();
    expect(count).toEqual(1);
  });
});