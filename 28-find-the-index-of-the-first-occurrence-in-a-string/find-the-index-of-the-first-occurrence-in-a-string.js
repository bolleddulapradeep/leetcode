/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     const hay = haystack.replaceAll(needle, 0)
    const index = String(hay).indexOf(0)
    return index
};