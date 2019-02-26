import closureCache from '../src/closure-cache';

describe('closure-cache测试：', () => {
  it('count只增加了一次', () => {
    let count = 0;
    const method = closureCache(() => count++);
    method();
    method();
    method();
    expect(count).toEqual(1);
  });
});