/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const array =[];

    arr.forEach((el, index) => {
        if(fn(el, index)){
            array.push(el)
        }
    })

    return array;
};