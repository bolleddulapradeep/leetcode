/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trim = String(s).trim();
    const last = trim.split(' ').pop().length;
    return last
};