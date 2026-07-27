/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
                if (matrix.length === 0) return result;
                
                let top = 0;
                let bottom = matrix.length - 1;
                let left = 0;
                let right = matrix[0].length - 1;
                
                while (top <= bottom && left <= right) {
                // Traverse from left to right on the top row
                for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
                }
                top++;
                
                // Traverse from top to bottom on the right column
                for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
                }
                right--;
                
                // Traverse from right to left on the bottom row (if still valid)
                if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
                }
                bottom--;
                }
                
                // Traverse from bottom to top on the left column (if still valid)
                if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
                }
                left++;
                }
                }
                
                return result;
};