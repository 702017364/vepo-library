import formatDate from '../src/format-date';

describe('formatDate function unit test', () => {
  it('1.', () => {
    const date = new Date('2018-09-10 09:08:07.333');
    const specif = 'H时M分SS秒 s';
    const value = formatDate(date, specif);
    expect(value).toEqual('9时8分07秒 333');
  });
});