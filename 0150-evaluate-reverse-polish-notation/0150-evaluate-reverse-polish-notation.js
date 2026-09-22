/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {
        // If token is an operator
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            // Pop two numbers (order matters!)
            let b = stack.pop();  // Second operand
            let a = stack.pop();  // First operand

            // Apply operator
            let result;
            if (token === '+') {
                result = a + b;
            } else if (token === '-') {
                result = a - b;
            } else if (token === '*') {
                result = a * b;
            } else { // token === '/'
                // Truncate toward zero
                result = Math.trunc(a / b);
            }

            // Push result back
            stack.push(result);
        } else {
            // Token is a number, push it
            stack.push(Number(token));
        }
    }

    // Final answer is the only element left
    return stack[0];


};