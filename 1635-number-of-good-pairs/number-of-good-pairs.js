/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let sum = 0;
    let obj = {}
    for (const iterator of nums) {
        if (!obj[iterator]) {
            obj[iterator] = iterator;
            const len = nums.filter((el) => el === iterator).length;
            sum = sum + (len * (len - 1) / 2)
        }
    }

    return sum
};