/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const arr = [...new Set(nums)];
    const sortedArray = arr.sort((a,b)=> b-a);
    return sortedArray.length >= 3 ? sortedArray[2] : sortedArray[0]
};