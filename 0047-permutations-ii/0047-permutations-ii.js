/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let ans = [];
    
    // ✅ SORT first!
    nums.sort((a, b) => a - b);
    
    getPerm(nums, 0, ans);
    return ans;  
};

function getPerm(nums, idx, ans) {
    if (idx === nums.length) {
        ans.push([...nums]);
        return;
    }
    
    
    let seen = new Set();
    
    for (let i = idx; i < nums.length; i++) {
       
        if (seen.has(nums[i])) continue;
        seen.add(nums[i]);
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
        getPerm(nums, idx + 1, ans);
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
    }
}