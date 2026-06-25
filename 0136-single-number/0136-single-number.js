/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num=0;
    for(let n of nums){
        num^=n;
    }
    return num;
};