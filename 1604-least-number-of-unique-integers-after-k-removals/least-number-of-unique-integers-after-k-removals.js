/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const map = new Map();

    for (const iterator of arr) {
        map.set(iterator, (map.get(iterator) || 0) + 1)
    }

    const values = Array.from(map.values()).sort((a, b) => a - b)

    let cnt = 0;

    for (let i = 0; i < values.length; i++) {

        if (k > values[i]) {
            k -= values[i]
            values[i] = 0
        } else {
            values[i] -= k;
            k = 0
        }

        if (values[i] !== 0) cnt++
    }

    return cnt
};