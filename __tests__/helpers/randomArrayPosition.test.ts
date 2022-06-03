import { randomArrayPosition } from '@src/helpers';

describe('Helper: randomArrayPosition (src/helpers/randomArrayPosition.ts)', () => {
  it('Should return array length = 4', () => {
    const response = randomArrayPosition(4);

    expect(response.length).toEqual(4);
  });

  it('Should return an array with 4 different numbers', () => {
    const response = randomArrayPosition(4);

    const quantity0 = response.filter((value) => value === 0);
    const quantity1 = response.filter((value) => value === 1);
    const quantity2 = response.filter((value) => value === 2);
    const quantity3 = response.filter((value) => value === 3);

    const isRepeated =
      quantity0.length !== 1 ||
      quantity1.length !== 1 ||
      quantity2.length !== 1 ||
      quantity3.length !== 1;

    expect(isRepeated).toBe(false);
  });
});
