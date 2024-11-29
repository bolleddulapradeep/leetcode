function containsDuplicate(nums: number[]): boolean {
    // const set = new Set();
    // for (const element of nums) {
    //     if (set.has(element)) {
    //         return true;
    //     }
    //     set.add(element);
    // }
    // return false;

    return new Set(nums).size < nums.length
};