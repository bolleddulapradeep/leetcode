function missingNumber(nums: number[]): number {
    const length = nums.length;
    const totalSum = length * (length + 1) / 2

    const partialSum = nums.reduce((acc, curr) => acc += curr, 0)

    return totalSum - partialSum
};