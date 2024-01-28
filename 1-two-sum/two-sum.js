/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        const sum = target - nums[i]
        if (sum in obj) {

            return [obj[sum], i]
        }
        obj[nums[i]] = i;
    }
    return []
};