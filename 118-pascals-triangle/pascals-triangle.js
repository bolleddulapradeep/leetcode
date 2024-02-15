/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = []
    for (let i = 0; i < numRows; i++) {
        const b = []
        for (let j = 0; j <= i; j++) {
            if (j === i || j === 0) {
                b.push(1)
            } else {
                b.push(arr[i - 1][j] + arr[i - 1][j - 1])
            }
        }
        arr.push(b)
    }
    return arr
};