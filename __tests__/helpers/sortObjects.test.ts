import { sortObjects } from '@src/helpers';

describe('Helper: sortObjects', () => {
  it('Should return an array with the following format: [{ id: 1 }, { id: 3 }, { id: 9 }]', () => {
    const input = [{ id: 3 }, { id: 9 }, { id: 1 }];
    const output = [{ id: 1 }, { id: 3 }, { id: 9 }];

    const response = sortObjects(input, 'id');

    expect(response).toEqual(output);
  });

  it('Should return an empty array if passing an empty array', () => {
    const response = sortObjects([], 'id');

    expect(response).toEqual([]);
  });

  it('Should return an error if you pass a key that does not exist', () => {
    const input = [{ id: 3 }];

    expect(() => sortObjects(input, 'name')).toThrow();
  });

  it('Should return an error if the objects key is not a "string" or "number', () => {
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
