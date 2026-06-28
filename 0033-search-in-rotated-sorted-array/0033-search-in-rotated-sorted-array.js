/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let st = 0;
    let end = nums.length - 1;
    while (st <= end) {
        let mid = st + Math.floor((end - st) / 2)
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[st] <= nums[mid]) { //left sorted array
            if (nums[st] <= target && target <= nums[mid]) {
                end = mid - 1;
            }else{
                st=mid+1;
            }
        }
        else {
            if (nums[mid] <= target && target <= nums[end]) {
                st = mid + 1;
            }else{
                end=mid-1
            }
        }

    }
    return -1;
};