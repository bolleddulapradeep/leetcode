/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    return '123456789' === (n.toString() + 2 * n + 3 * n).split('').sort().join('')
};