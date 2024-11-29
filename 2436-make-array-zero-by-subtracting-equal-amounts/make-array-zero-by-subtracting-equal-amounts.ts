function minimumOperations(nums: number[]): number {
    return new Set(nums.filter((el) => el !== 0)).size;
};