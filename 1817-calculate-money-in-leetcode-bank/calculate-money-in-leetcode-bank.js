/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
let count = 1;
    let val = 1;
    let sum = 0;
    let c = 1
    while (val <= n) {
        if (val % 7 === 0) {
            sum += c;
            count++;
            c = count
        } else {
            sum += c
            ++c
        }
        ++val;
    }

    return sum;
};