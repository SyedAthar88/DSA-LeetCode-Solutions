/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
                const n = matrix[0].length;
                let low = 0;
                let high = m * n - 1;
                
                while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                const row = Math.floor(mid / n);
                const col = mid % n;
                const value = matrix[row][col];
                
                if (value === target) return true;
                else if (value < target) low = mid + 1;
                else high = mid - 1;
                }
                
                return false;
};