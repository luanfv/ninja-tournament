import { randomNumberFrom1To100 } from '@src/helpers';

describe('Helper: randomNumberFrom1To100 (src/helpers/randomNumberFrom1To100.ts)', () => {
  it('Should return [{ id: 1 }, { id: 3 }, { id: 9 }]', () => {
    const response = randomNumberFrom1To100();
    const greaterThanZeroAndLessThan101 = response > 0 && response < 101;

    expect(greaterThanZeroAndLessThan101).toEqual(true);
  });
});
