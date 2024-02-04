/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const arr1 = [];
    let index = 0;

    while (arr.length > index) {
        arr1.push(arr.slice(index, index + size))
        index += size
    }

    return arr1;
};
