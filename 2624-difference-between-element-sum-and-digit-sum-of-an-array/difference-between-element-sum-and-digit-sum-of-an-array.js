/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const maped = nums.map((el) => [...String(el)]).flat(Infinity).reduce((acc, curr) => { return Number(curr) + acc }, 0);
    const unMapped = nums.reduce((acc, curr) => { return acc + curr }, 0)
    return unMapped - maped
};