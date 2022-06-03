const randomArrayPosition = (length: number) => {
  const positions: number[] = [];

  do {
    const number = Math.floor(Math.random() * length);

    const numberExists = positions.find((value) => value === number);

    if (numberExists === undefined) {
      positions.push(number);
    }
  } while (positions.length !== length);

  return positions;
};

export { randomArrayPosition };
