/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];
    function printSub(result, i) {
        if (i === nums.length) {
            ans.push(result.slice());
            return;
        }
        //include
        result.push(nums[i]);
        printSub(result, i + 1);
        //exclude
        result.pop();
        printSub(result, i + 1);
    }
    printSub([], 0);
    return ans;
};