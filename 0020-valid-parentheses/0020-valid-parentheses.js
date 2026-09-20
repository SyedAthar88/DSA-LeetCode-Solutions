/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let n = s.length;
    // our valid string must contain equal characters otherwise its a valid one 
    if (s.length % 2 !== 0) return false;
    for (let i = 0; i < n; i++) {
        let char = s[i];
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else {
            // before checking closing tags we'll check if stack has members or not
            if (stack.length === 0) return false;
            const lastOpen = stack.pop();
            if (char === ')' && lastOpen != '(') return false;
            if (char === '}' && lastOpen !== '{') return false;
            if (char === ']' && lastOpen !== '[') return false;
        }
    }
    //at the end all the chars should match and return true for valid
    return stack.length === 0; //boolean function
}