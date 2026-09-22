/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let count = 0;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            count--;
        }
        //agar 0 hai to hum push nahi kary gay
        // for i=0 count =0
        if (count !== 0) {
            ans += s[i];
        }
        if (s[i] === '(') {
            count++
        }
    }
    return ans;

};