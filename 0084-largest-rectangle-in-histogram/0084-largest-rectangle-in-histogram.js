/**
 * @param {number[]} heights
 * @return {number}
 */
function previousSmaller(heights) {
    const n = heights.length;
    const result = new Array(n).fill(-1);   // -1 = no smaller bar to the left
    const stack = [];                        // stores indices, heights increasing bottom to top

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    return result;
}
// Piece 2: for every bar, find index of nearest SMALLER bar to its RIGHT
function nextSmaller(heights) {
    const n = heights.length;
    const result = new Array(n).fill(n);   // n = no smaller bar to the right
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            stack.pop();
        }
        result[i] = stack.length === 0 ? n : stack[stack.length - 1];
        stack.push(i);
    }

    return result;
}
var largestRectangleArea = function (heights) {
    let left = previousSmaller(heights);
    let right = nextSmaller(heights);
    let maxArea = 0;
    let n = heights.length
    for (let i = 0; i < n; i++) {
        const width = right[i] - left[i] - 1;
        const height = heights[i]
        const area = width * height;
        maxArea = Math.max(maxArea, area)
    }
    return maxArea;
};