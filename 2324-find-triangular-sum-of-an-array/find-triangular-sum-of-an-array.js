/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    if (!nums.length) return -1
    if (nums.length === 1) return nums[0];

    const b = [];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + nums[i - 1] > 9) {
            b.push((nums[i] + nums[i - 1]) % 10)
        } else {
            b.push(nums[i - 1] + nums[i])
        }
    }
    return triangularSum(b)
};