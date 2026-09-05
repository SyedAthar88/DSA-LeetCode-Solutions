/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const INT_MAX=Math.pow(2,31)-1;
    let result = 0;
    let Number = Math.abs(x);
    while (Number > 0) {
        let lastNumber = Number % 10;
        Number = Math.floor(Number / 10);
        result = result * 10 + lastNumber
        if(result >INT_MAX ){
            return 0
        }
    }
    if (x < 0) {
        result = -result
    }
    return result
};