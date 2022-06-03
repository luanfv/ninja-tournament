import { sortObjects } from '@src/helpers';

describe('Helper: sortObjects (src/helpers/sortObjects.ts)', () => {
  it('Should return [{ id: 1 }, { id: 3 }, { id: 9 }]', () => {
    const input = [{ id: 3 }, { id: 9 }, { id: 1 }];
    const output = [{ id: 1 }, { id: 3 }, { id: 9 }];

    const response = sortObjects(input, 'id');

    expect(response).toEqual(output);
  });

  it('Should return [] if passing an empty array', () => {
    const response = sortObjects([], 'id');

    expect(response).toEqual([]);
  });

  it("Should return an error if using a key that doesn't exist", () => {
    const input = [{ id: 3 }];

    expect(() => sortObjects(input, 'name')).toThrow();
  });

  it('Should return an error if the objects key is not a "string" or "number"', () => {
    const inputFunction = [
      {
        id: () => {},
      },
    ];
    const inputObject = [
      {
        id: {},
      },
    ];

    expect(() => sortObjects(inputFunction, 'id')).toThrow();
    expect(() => sortObjects(inputObject, 'id')).toThrow();
  });
});
