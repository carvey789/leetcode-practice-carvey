/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let memo = {}
    for(let i = 0; i < jewels.length; i++) {
        memo[jewels[i]] = true
    }
    
    for(let i = 0; i < stones.length; i++) {
        if(stones[i] in memo && memo[stones[i]]) count++
    }
    
    return count
};