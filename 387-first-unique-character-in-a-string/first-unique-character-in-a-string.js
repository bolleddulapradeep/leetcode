/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const obj = {}
    for (const iterator of s) {

        if (!obj[iterator]) {
            obj[iterator] = 1
        } else {
            obj[iterator] = obj[iterator] + 1
        }
    }

   for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            return i
        }
    }
    return -1
};