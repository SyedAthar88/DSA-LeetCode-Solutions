/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let len = nums2.length;
    let stack = [];
    let hashmap = new Map();

    for (let i = len - 1; i >= 0; i--) {

        while (
            stack.length &&
            stack[stack.length - 1] <= nums2[i]
        ) {
            stack.pop();
        }

        let val = stack.length === 0 ? -1 : stack[stack.length - 1];

        hashmap.set(nums2[i], val);

        stack.push(nums2[i]);
    }

    return nums1.map(num => hashmap.get(num));
};