function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set = new Set(nums1);
  const set2 = new Set(nums2);
  const res1: number[] = [];
  const res2: number[] = [];

  set.forEach((value) => {
    if (!set2.has(value)) {
      res1.push(value as any);
    }
  });

  set2.forEach((value) => {
    if (!set.has(value)) {
      res2.push(value as any);
    }
  });

  return [res1, res2];  
};