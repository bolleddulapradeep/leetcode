function minimumAverage(nums: number[]): number {
  let minAvg: number = Number.POSITIVE_INFINITY;
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
    const avg = (nums[i] + nums[nums.length - 1 - i]) / 2;
    minAvg = Math.min(avg, minAvg);
  }

  return minAvg;
}