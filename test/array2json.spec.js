import array2json from '../src/array2json';

describe('array2json function unit test', () => {
  it('Is it equal? ', () => {
    const result = array2json([
      {
        id: '1',
        label: 'abc',
      },
      {
        id: '2',
        label: 'def',
      },
      'ghi',
    ]);

    expect(result).toEqual({
      1: {
        id: '1',
        label: 'abc',
      },
      2: {
        id: '2',
        label: 'def',
      },
      ghi: true,
    });
  });
});