/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let digits = new Set();
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            digits.add(Number(char))
        }
    }
    // lets sort them 
    let sorted = Array.from(digits).sort((a, b) => b - a);
    return sorted.length >= 2? sorted[1] : -1;
};