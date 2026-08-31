/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // Helper function to compare two frequency arrays
    function isFreqSame(freq1, freq2) {
        for (let i = 0; i < 26; i++) {
            if (freq1[i] !== freq2[i]) {
                return false;
            }
        }
        return true;  // ✅ Fixed: Moved outside the loop
    }

    let n1 = s1.length;
    let n2 = s2.length;
    
    if (n1 > n2) return false;
    
    // Build frequency array for s1
    let freq = new Array(26).fill(0);
    for (let i = 0; i < n1; i++) {
        freq[s1.charCodeAt(i) - 97]++;
    }
    
    let windSize = n1;
    
    // Slide window over s2
    for (let i = 0; i <= n2 - windSize; i++) {  // ✅ Fixed: Correct range
        let windIdx = 0;
        let idx = i;
        let windFreq = new Array(26).fill(0);   // ✅ Fixed: Correct spelling
        
        // Build current window
        while (windIdx < windSize && idx < n2) {
            windFreq[s2.charCodeAt(idx) - 97]++;  // ✅ Fixed: windFreq (capital F)
            windIdx++;
            idx++;
        }
        
        // Check if window matches s1
        if (isFreqSame(freq, windFreq)) {  // ✅ Fixed: Added this check inside loop
            return true;
        }
    }
    
    return false;  // ✅ Added: Return false if no match found
};