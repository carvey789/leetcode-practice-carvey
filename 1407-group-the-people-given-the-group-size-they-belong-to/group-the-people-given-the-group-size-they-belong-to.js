/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let store = {}
    let res = []
    
    for(let i = 0; i < groupSizes.length; i++) {
        let iStr = groupSizes[i].toString()
        if(iStr in store) {
            store[iStr] = [...store[iStr], i]
            if(store[iStr].length === groupSizes[i]) {
                res.push(store[iStr])
                delete store[iStr]
            }
        } else {
            store[iStr] = [i]
            if(store[iStr].length === groupSizes[i]) {
                res.push(store[iStr])
                delete store[iStr]
            }
        }
    }

    
    return [...Object.values(store), ...res]
};