import array2json from '../src/array2json';

describe('array2json方法测试：', () => {
  it('值相等', () => {
    const inputValue = [
      {
        id: '1',
        label: 'abc',
      },
      {
        id: '2',
        label: 'def',
      },
      'ghi',
    ];
    const outputValue = {
      1: {
        id: '1',
        label: 'abc',
      },
      2: {
        id: '2',
        label: 'def',
      },
      ghi: true,
    };
    expect(array2json(inputValue)).toEqual(outputValue);
  });
});