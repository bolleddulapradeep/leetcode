function intersection(nums: number[][]): number[] {
//    if (nums.length < 2) return [nums.sort((a,b) => a -)];
    if(!nums.length) return []
    const arr1 = [...new Set(nums[0])];
    return nums.slice(1).reduce(
        (acc, curr) => {
            const num = new Set(curr);

             return acc.filter((el) => num.has(el));
        },
        [...arr1]
    ).sort((a, b) => a -b); 
};