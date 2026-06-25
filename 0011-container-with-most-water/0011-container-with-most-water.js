/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max_Water=0;
    lp=0;
    rp=height.length-1;
    while(lp<rp){
        w=rp-lp;
        h=Math.min(height[lp],height[rp]);
        area=w*h;
        max_Water=Math.max(area,max_Water);
        height[lp]<height[rp]?lp ++ : rp --;

    }
    return max_Water;
};