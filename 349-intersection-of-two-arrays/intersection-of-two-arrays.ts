function intersection(nums1: number[], nums2: number[]): number[] {
    const arr = new Set(nums1);

  return nums2.filter(
    (el, index, array) => array.indexOf(el) === index && arr.has(el)
  );
};