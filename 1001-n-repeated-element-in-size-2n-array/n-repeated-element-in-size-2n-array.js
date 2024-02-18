/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    if (!nums.length) return -1

    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i])
        } else {
            return nums[i]
        }
    }
    return -1
};