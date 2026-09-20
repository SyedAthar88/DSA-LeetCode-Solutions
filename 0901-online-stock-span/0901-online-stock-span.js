var StockSpanner = function() {
    // Stack to store [price, span] pairs
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    
    // Pop while top price <= current price
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack[this.stack.length - 1][1];  // Add popped span
        this.stack.pop();
    }
    
    // Push current price and its span
    this.stack.push([price, span]);
    
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */