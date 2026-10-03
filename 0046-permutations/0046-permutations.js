/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
 
    let ans = [];
    getParams(nums, 0, ans);
    return ans;
};
function getParams(nums, idx, ans) {
       let n = nums.length;
    if (idx === nums.length) {
        ans.push([...nums]);  
        return;
    }
    for (let i = idx; i < n; i++) {
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
        getParams(nums, idx + 1, ans);
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
    }
}