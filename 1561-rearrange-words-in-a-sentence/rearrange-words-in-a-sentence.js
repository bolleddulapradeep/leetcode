/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    const val = text.toLowerCase().split(' ').sort((a, b) => a.length - b.length).join(' ');
    return val && val.charAt(0).toUpperCase() + val.slice(1);
};