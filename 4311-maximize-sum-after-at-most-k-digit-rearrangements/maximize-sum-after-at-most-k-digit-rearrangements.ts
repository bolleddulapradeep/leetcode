function maximizeSum(nums: number[], k: number): number {
  let sum = 0;
  const gains = [];

  for (const num of nums) {
    sum += num;
    const maxNumber = Number(String(num).split('').sort((a, b) => Number(b) - Number(a)).join(''))

    gains.push(maxNumber - num)
  }

  gains.sort((a,b) => b-a);

  for (let i = 0; i < k; i++) {
    sum += gains[i]
  }

  return sum;
};
