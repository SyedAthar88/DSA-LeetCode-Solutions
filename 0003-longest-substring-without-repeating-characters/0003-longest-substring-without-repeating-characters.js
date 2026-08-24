/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left =0;
    let maxlen=0;
    let seen=new Set();
    for(let right=0; right<s.length; right ++){
        // if we find any duplicate value 
        while(seen.has(s[right])){
            seen.delete(s[left]);
            left ++
        }
        seen.add(s[right]);
        maxlen=Math.max(maxlen,right-left +1);

    }
    return maxlen
};