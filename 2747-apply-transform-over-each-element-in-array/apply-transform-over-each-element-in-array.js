/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array = []

    arr.forEach((el, index) => {
        array.push(fn(el, index))
    })

    return array
};