/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let freq = 0;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        if (freq === 0) {
            ans = nums[i]
        }
        if (ans === nums[i]) {
            freq++
        }
        else {
            freq--
        }
    }
    return ans
};