/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {

       const result = []

    const str = '123456789';

    for (let i = 0; i <= 9; i++) {
        for (let j = i + 1; j <= 9; j++) {

            const num = Number(str.substring(i, j));
            if (num >= low && num <= high) { result.push(num) }
        }
    }

    return result.sort((a, b) => a - b)
};