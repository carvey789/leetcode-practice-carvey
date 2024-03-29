/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let res = []
    
    for(let i = 0; i < pref.length; i++) {
        if (i === 0) {
            res.push(pref[i])
        }
        else {
            res.push(pref[i] ^ pref[i-1])
        }
    }
    
    return res
};