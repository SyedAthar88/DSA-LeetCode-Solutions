var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;
    
    while (curr !== null) {
        next = curr.next;     // Save the next node
        curr.next = prev;     // Reverse the pointer
        prev = curr;          // Move prev forward
        curr = next;          // Move curr forward
    }
    
    return prev;  // prev is the new head!
};