/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ans = [];
        nums.sort((a, b) => a - b);

    function printSub(result, i) {
        if (i === nums.length) {
            ans.push(result.slice());
            return;
        }
        
        //include
        result.push(nums[i]);
        printSub(result, i + 1);
        result.pop();
        //exclude
        let idx = i + 1;
        while (idx < nums.length && nums[idx] === nums[idx - 1]) idx++

        printSub(result, idx);

    }
    printSub([], 0);
    return ans;
};