const generateRandomNumber = (
  min: number,
  max: number,
  exclude?: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNumber;
};

export { generateRandomNumber };
