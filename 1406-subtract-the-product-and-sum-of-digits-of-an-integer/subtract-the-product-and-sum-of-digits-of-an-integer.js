/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    if (n < 1 || n > 10 ** 5) retunr - 1
    let sum = 0;
    let val = 1;
    while (n > 0) {
        val = val * (n % 10);
        sum += (n % 10)
        n = Math.floor(n / 10)
    }
    return val - sum
};