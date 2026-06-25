/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr_Sum=0;
    let max_Sum=-Infinity;
    for(let i=0; i<nums.length; i++){
        curr_Sum += nums[i];
        max_Sum=Math.max(curr_Sum,max_Sum);
        if(curr_Sum<0){
            curr_Sum=0;
        }
    }
    return max_Sum
};