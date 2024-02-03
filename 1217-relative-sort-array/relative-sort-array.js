/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
     const val = {};
    const arr = []
    for (const iterator of arr1) {
        if (arr2.includes(iterator)) {
            if (val[iterator]) {
                arr2.splice(arr2.indexOf(iterator), 0, iterator)
            } else {
                val[iterator] = 1
            }
        } else {
            arr.push(iterator)
        }
    }
    return [...arr2, ...arr.sort((a, b) => a - b)]
};