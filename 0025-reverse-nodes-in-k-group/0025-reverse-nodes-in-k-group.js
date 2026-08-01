var reverseKGroup = function(head, k) {
    // Check if we have at least k nodes
    let count = 0;
    let temp = head;
    while (temp !== null && count < k) {
        temp = temp.next;
        count++;
    }
    
    // If less than k nodes, return head as is (don't reverse)
    if (count < k) {
        return head;
    }
    
    // Reverse k nodes
    let curr = head;
    let next = null;
    let prev = null;
    count = 0;
    
    while (curr !== null && count < k) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    
    // After reversal, head is now the tail of this group
    // Connect it to the result of the next group
    if (head !== null) {
        head.next = reverseKGroup(curr, k);
    }
    
    // Return the new head of this group
    return prev;
};