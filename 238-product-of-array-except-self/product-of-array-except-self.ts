function productExceptSelf(nums: number[]): number[] {
      if (!nums.length) return [];

  const result = Array(nums.length).fill(1);

  let left = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }

  let right = 1;

  for (let i = nums.length - 1; i > -1; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;

};