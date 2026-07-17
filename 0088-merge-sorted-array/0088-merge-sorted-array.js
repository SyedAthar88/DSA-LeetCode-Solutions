function merge(nums1, m, nums2, n) {
    // Three pointers starting from the END
    let i = m - 1;      // Last valid element in nums1
    let j = n - 1;      // Last element in nums2
    let k = m + n - 1;  // Last position in merged array
    
    // Compare from back, place larger element at the end
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    // If nums2 still has elements, copy them over
    // (If nums1 has leftovers, they're already in place!)
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}