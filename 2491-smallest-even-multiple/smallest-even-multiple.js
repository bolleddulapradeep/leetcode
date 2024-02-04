/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    if (n < 1 && n > 150) return -1

    if (n % 2 === 0) {
        return n
    }
    return n * 2
};