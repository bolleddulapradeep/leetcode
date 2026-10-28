function toBinary(num: number): string {
  let result = '';
  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2)
  }

  return result;
}

function toNumber(num: string): number {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) > 0) {
      result = result + 1
    }
  }

  return result;
}

function calculateScore(a: number, b: number): number {

  const a1 = toNumber(toBinary(a));
  const a2 = toNumber(toBinary(b));

  if (a1 >= a2) return a1 * a2;

  return Math.floor(a2 / a1);
};