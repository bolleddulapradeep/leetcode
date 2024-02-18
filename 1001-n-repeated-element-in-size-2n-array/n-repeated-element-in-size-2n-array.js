/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    if (!nums.length) return -1

    nums.sort((a, b) => a - b)

    const remDup = [...new Set([...nums])]

    console.log(remDup)


    for (let i = 0; i < remDup.length; i++) {

        const first = nums.findIndex((el) => el === nums[i]);

        const lastIndex = nums.lastIndexOf(nums[i])
        if (lastIndex - first) {
            return remDup[i]
        }
    }
    return -1
};