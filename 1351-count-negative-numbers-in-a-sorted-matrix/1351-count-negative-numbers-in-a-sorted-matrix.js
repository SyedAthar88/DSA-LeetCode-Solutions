/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
    for(let row=0; row<grid.length; row++){
        for(let col=0; col<grid[row].length; col++){
            if(grid[row][col]<0){
                count ++
            }
        }
    }
    return count;
};