function countSetBits(num: number): number {
  let count = 0;

  while (num > 0) {
    num &= num - 1;
    count++;
  }

  return count;
}


function calculateScore(a: number, b: number): number {
  const a1 = countSetBits(a);
  const a2 = countSetBits(b);

  if (a1 >= a2) return a1 * a2;

  return Math.floor(a2 / a1);
};