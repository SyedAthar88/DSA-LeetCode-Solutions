/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let  st=0;
    let end=nums.length-1;        
    
    while(st<=end){

    let mid=st+ Math.floor((end-st)/2);
    if(nums[mid]>target){
        end=mid-1
    }
    else if(nums[mid]<target){
        st=mid+1;
    }else{
       return mid
    }
        
    }
         return -1;
};