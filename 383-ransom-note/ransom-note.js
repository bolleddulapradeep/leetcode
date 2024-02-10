/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     for (const iterator of magazine) {
        ransomNote = ransomNote.replace(iterator, '')
    }

    if (!ransomNote) return true;

    return false
};