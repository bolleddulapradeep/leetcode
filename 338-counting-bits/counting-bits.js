/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function(n) {

// if(n<0) return -1

//      const a = [];
//     for (let i = 0; i <= n; i++) {
//         const binary = i.toString(2)
//         const val = binary.replaceAll('0', '').length
//         a.push(val)
//     }
//     return a
// };


var countBits = function countBits(n) {
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
}