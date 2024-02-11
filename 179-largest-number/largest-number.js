/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const isZero = nums.every(el => el ===0 );
    if(isZero) return '0'
    return nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('')
};