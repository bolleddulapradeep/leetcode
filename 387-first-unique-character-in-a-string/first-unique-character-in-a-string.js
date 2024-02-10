/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
//     const obj = {}
//     for (const iterator of s) {

//         if (!obj[iterator]) {
//             obj[iterator] = 1
//         } else {
//             obj[iterator] = obj[iterator] + 1
//         }
//     }

//    for (let i = 0; i < s.length; i++) {
//         if (obj[s[i]] === 1) {
//             return i
//         }
//     }
//     return -1


const map = new Map()

    for (const iterator of s) {
        if (!map.get(iterator)) {
            map.set(iterator, 1)
        } else {
            map.set(iterator, map.get(iterator) + 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        console.log(map.get(s[i]))
        if (map.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};