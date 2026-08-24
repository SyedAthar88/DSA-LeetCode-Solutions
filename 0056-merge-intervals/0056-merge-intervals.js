/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    // Sort by start time so we can process in order 
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let newInterval = intervals[0];
    result.push(newInterval);
    for (let interval of intervals) {
        if (interval[0] <= newInterval[1]) {
            // 5a. Overlaps! Update the end if this one ends later
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
        else {
            // 5b. No overlap! Start a new merged interval
            newInterval = interval;
            result.push(newInterval);
        }
    }
    return result;

};