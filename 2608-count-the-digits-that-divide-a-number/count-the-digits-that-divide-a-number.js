/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
     let count = 0;
    let value = num
    while (value > 0) {
        const reminder = value % 10;
        value = Math.floor(value / 10)
        if (num % reminder === 0) {
            count++
        }
    }
    return count
};