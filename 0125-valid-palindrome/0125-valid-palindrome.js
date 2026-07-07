/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Left side par jab tak character alphanumeric nahi hai,
        // usko skip karo.
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // Right side par bhi invalid characters skip karo.
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Dono characters ko lowercase bana kar compare karo.
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Agar same hain to pointers andar le jao.
        left++;
        right--;
    }

    return true;
};


// Helper Function
function isAlphaNumeric(ch) {

    return (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= '0' && ch <= '9')
    );

}