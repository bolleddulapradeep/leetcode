/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
        [nums[i], nums[counter]] = [nums[counter], nums[i]];
        counter++;
        }
    }
};