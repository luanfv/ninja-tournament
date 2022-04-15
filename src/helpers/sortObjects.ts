const sortObjects = (array: any[], key: string) => {
  if (array.length === 0) {
    return [];
  }

  if (typeof array[0][key] !== 'string' && typeof array[0][key] !== 'number') {
    throw Error('Can only sort string and number');
  }

  const response = array.sort((a, b) => {
    return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
  });

  return response;
};

export { sortObjects };
