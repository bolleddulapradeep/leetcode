function reverse(x: number): number {
if (!x) return x;

  const upperLimit = Math.pow(2, 31) - 1;
  const lowerLimit = Math.pow(-2, 31);
  const negativeNumber = x < 0;

  if (negativeNumber) {
    x = Math.abs(x);
  }

  const str = Number(String(x).split("").reverse().join(""));

  if (str > upperLimit || -str < lowerLimit) return 0;

  return negativeNumber ? -1 * str : str;
};