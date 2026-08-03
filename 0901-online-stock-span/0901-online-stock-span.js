var StockSpanner = function() {
    // Stack stores pairs of [price, span]
    // Each element in stack = [price, span]
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    // Start with span = 1 (today)
    let span = 1;
    
    // While stack is not empty AND current price >= top price
    // We pop and add their spans to current span
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        // Add the span of the popped element
        span += this.stack.pop()[1];
    }
    
    // Push current [price, span] to stack
    this.stack.push([price, span]);
    
    // Return the span for today
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */