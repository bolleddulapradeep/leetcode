/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
     const word = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (!word.includes(words[i]) && words[j].includes(words[i]) && j !== i) {
                word.push(words[i])
            }
        }
    }

    return word
};