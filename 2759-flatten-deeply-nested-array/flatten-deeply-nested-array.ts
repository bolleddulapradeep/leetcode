type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    const transformedArr = []
    for (const iterator of arr) {
        if (Array.isArray(iterator) && n > 0) {
            transformedArr.push(...flat(iterator, n - 1))
        } else {
            transformedArr.push(iterator)
        }
    }
    return transformedArr;
};