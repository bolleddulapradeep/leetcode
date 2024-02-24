/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

if(n<0) return -1

     const a = [];
    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2)
        const val = binary.replaceAll('0', '').length
        a.push(val)
    }
    return a
};