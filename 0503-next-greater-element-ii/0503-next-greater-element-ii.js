/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);   // default: no next greater element found
    const stack = [];                        // holds INDICES (only pushed during first pass, i < n)

    for (let i = 0; i < 2 * n; i++) {
        const num = nums[i % n];   // wraps around: 0,1,2,...,n-1,0,1,2,...,n-1

        // resolve every waiting index whose next greater element is 'num'
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            const idx = stack.pop();
            result[idx] = num;
        }

        // only push new indices during the FIRST pass (i < n)
        // second pass is only used to help resolve leftovers, not to add new work
        if (i < n) {
            stack.push(i);
        }
    }

    return result;
};