/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];

    if (rowIndex === 1) return [1, 1]

    const arr = [[1], [1, 1]];

    for (let i = 2; i <= rowIndex; i++) {
        const b = []
        for (let j = 0; j <= i; j++) {
            if (i === j || j === 0) {
                b.push(1)
            } else {
                b.push(arr[i - 1][j] + arr[i - 1][j - 1])
            }
        }
        arr.push(b)
    }

    return arr[rowIndex]
};