/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if (num < 0 || num > 10 ** 6) return -1
    let count = 0;
    while (num !== 0) {
        num % 2 === 0 ? num /= 2 : num--;
        count++
    }
    return count;
};