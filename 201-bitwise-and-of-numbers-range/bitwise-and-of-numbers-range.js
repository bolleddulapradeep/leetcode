/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let val = 0
    while (left < right) {
        left >>= 1
        right >>= 1
        val++
    };
    return left << val
};