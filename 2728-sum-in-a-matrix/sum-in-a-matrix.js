/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    if (!nums.length) return -1
    for (let i = 0; i < nums.length; i++) {
        nums[i].sort((a, b) => a - b)
    }

    let sum = 0;

    for (i = 0; i < nums[0].length; i++) {

        let maxV = 0;

        for (let j = 0; j < nums.length; j++) {
            maxV = Math.max(nums[j][i], maxV)
        }

        sum += maxV
    }
    return sum
}