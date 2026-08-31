/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let n = chars.length;
    let idx = 0;
    let i = 0;  // ✅ FIX 1: Use while loop instead of for
    
    while (i < n) {  // ✅ FIX 2: Changed from for to while
        let count = 0;
        let char = chars[i];
        
        while (i < n && char == chars[i]) {
            count++;
            i++;
        }
        
        // ✅ FIX 3: Write character for ALL cases
        chars[idx] = char;
        idx++;
        
        if (count > 1) {
            let countStr = count.toString();
            for (let j = 0; j < countStr.length; j++) {
                chars[idx] = countStr[j];
                idx++;
            }
        }
    }
    
    return idx;  // ✅ FIX 4: Moved return outside the loop
};