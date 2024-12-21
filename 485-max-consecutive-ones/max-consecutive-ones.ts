function findMaxConsecutiveOnes(nums: number[]): number {
  let maxCnt = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cnt++;
      maxCnt = Math.max(maxCnt, cnt);
    } else {
      cnt = 0;
    }
  }
  return maxCnt;
}