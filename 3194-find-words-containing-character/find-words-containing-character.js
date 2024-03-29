/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res = words.map((word, idx) => {
        if(word.includes(x)) return idx
    }).filter(word => word !== undefined)
    
    return res
};