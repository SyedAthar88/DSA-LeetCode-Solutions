/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let n = s.length
    
    // Early return for odd length
    if (s.length % 2 !== 0) {
        return false;
    }
    
    // Loop through each character
    for (let i = 0; i < n; i++) {
        const char = s[i]
        
        // If it's an opening bracket, push to stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        else {
            // If stack is empty, we have a closing bracket without an opening one
            if (stack.length === 0) {
                return false;
            }

            // Pop the last opening bracket
            const lastOpen = stack.pop();

            // Check if the closing bracket matches the opening one
            if (char === ')' && lastOpen !== '(') {
                return false;
            }
            if (char === '}' && lastOpen !== '{') {
                return false;
            }
            if (char === ']' && lastOpen !== '[') {
                return false;
            }
        }
    }
    
    // After processing all characters, stack should be empty
    return stack.length === 0;
}