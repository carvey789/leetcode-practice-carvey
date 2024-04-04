/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let arr = []
    let check = []
    for(let i = 0; i < nums .length; i++) {
        if(check.includes(nums[i])) {
            arr.push("_")
            continue
        } else {
            check.push(nums[i])
        }
    }
    let ans = [...check, ...arr]
    nums.splice(0, nums.length, ...ans)
    return check.length
};