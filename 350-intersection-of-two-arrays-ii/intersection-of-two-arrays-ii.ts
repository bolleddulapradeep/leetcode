function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map();
    const resultArray: number[] = [];

    for (const element of nums1) {
        map.set(element, (map.get(element) || 0) + 1);
    }

    for (const element of nums2) {
        if (map.get(element) > 0) {
            resultArray.push(element);
            map.set(element, map.get(element) - 1);
        }
    }
    return resultArray;
};