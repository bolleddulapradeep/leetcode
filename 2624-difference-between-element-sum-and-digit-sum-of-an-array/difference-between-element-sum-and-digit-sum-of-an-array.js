/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    // const maped = nums.map((el) => [...String(el)]).flat(Infinity).reduce((acc, curr) => { return Number(curr) + acc }, 0);
    // const unMapped = nums.reduce((acc, curr) => { return acc + curr }, 0)
    // return unMapped - maped

    let outerSum = 0;
    let innerSum = 0;

    for (let i = 0; i < nums.length; i++) {
        innerSum += nums[i];
        if (nums[i] > 9) {
            while (nums[i] > 0) {
                const rem = nums[i] % 10;
                nums[i] = Math.floor(nums[i] / 10);
                outerSum += rem;
            }
        } else {
            outerSum += nums[i];
        }
    }
    return innerSum - outerSum
};