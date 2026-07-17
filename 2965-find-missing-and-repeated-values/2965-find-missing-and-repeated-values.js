function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const count = new Array(n * n + 1).fill(0);
    const ans = [0, 0];
    
    // Step 1: Count frequencies in one pass
    for (const row of grid) {
        for (const val of row) {
            count[val]++;
            // Early detection: if count hits 2, we found the duplicate!
            if (count[val] === 2) {
                ans[0] = val;
            }
        }
    }
    
    // Step 2: Find the missing number (count = 0)
    for (let i = 1; i <= n * n; i++) {
        if (count[i] === 0) {
            ans[1] = i;
            break;
        }
    }
    
    return ans;
}