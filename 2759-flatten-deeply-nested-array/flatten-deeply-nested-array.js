/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
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