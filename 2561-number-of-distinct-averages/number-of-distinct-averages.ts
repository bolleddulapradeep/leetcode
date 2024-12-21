function distinctAverages(nums: number[]): number {
  let minAvg = new Set();
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  while (nums.length) {
    minAvg.add((((nums.shift() as any) + nums.pop()) as any) / 2);
  }
  return minAvg.size;
}