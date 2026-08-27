/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s.split(' ');
    let ans = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].length > 0) {
            ans.push(words[i]);
        }
    }

    return ans.join(' ');

};