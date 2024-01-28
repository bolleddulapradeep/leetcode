/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    const concated = arr1.concat(arr2);

    const obj = {}


    for (const iterator of concated) {
        if (!obj[iterator.id]) {
            obj[iterator.id] = iterator;

        } else {
            obj[iterator.id] = { ...obj[iterator.id], ...iterator }
        }
    }

    return Object.values(obj)
};