/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divSum = 0, nonDivSum = 0
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            divSum += i
        } else {
            nonDivSum += i
        }
    }
    return nonDivSum - divSum
};