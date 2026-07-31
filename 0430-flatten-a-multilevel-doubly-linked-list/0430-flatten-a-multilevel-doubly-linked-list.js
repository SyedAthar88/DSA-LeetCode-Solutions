var flatten = function(head) {
    if (!head) return head;
    
    let current = head;
    
    while (current) {
        // If current node has a child
        if (current.child) {
            // Find the tail of the child list
            let childTail = current.child;
            while (childTail.next) {
                childTail = childTail.next;
            }
            
            // Connect child tail to current's next
            childTail.next = current.next;
            if (current.next) {
                current.next.prev = childTail;
            }
            
            // Connect current to child
            current.next = current.child;
            current.child.prev = current;
            current.child = null; // Remove child pointer
        }
        
        current = current.next;
    }
    
    return head;
};