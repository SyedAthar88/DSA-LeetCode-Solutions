var trap = function (height) {
    let n = height.length;
    
    // Edge case: if array is empty or has less than 3 elements
    if (n === 0) return 0;
    
    // Array to store maximum height from left
    let lmax = new Array(n).fill(0);
    // Array to store maximum height from right
    let rmax = new Array(n).fill(0);
    
    // Initialize first and last elements
    lmax[0] = height[0];
    rmax[n - 1] = height[n - 1];  // ✅ Fixed: rmax at last index
    
    // Fill lmax: max height from left to current position
    for (let i = 1; i < n; i++) {
        lmax[i] = Math.max(lmax[i - 1], height[i]);
    }
    
    // Fill rmax: max height from right to current position
    for (let j = n - 2; j >= 0; j--) {  // ✅ Fixed: using 'j' not 'i'
        rmax[j] = Math.max(rmax[j + 1], height[j]);  // ✅ Fixed: using 'j'
    }
    
    // Calculate water trapped at each position
    let ans = 0;
    for (let i = 0; i < n; i++) {
        // Water = min(maxLeft, maxRight) - current height
        ans += Math.min(lmax[i], rmax[i]) - height[i];  // ✅ Fixed formula
    }
    
    return ans;
};