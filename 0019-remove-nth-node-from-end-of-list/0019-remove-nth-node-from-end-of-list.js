/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create sentinel node pointing to head
    let sentinel = new ListNode(0);
    sentinel.next = head;
    
    // Two pointers starting at sentinel
    let firstPtr = sentinel;
    let secondPtr = sentinel;
    
    // Move secondPtr n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        secondPtr = secondPtr.next;
    }
    
    // Move both pointers together until secondPtr reaches null
    while (secondPtr !== null) {
        firstPtr = firstPtr.next;
        secondPtr = secondPtr.next;
    }
    
    // Remove the target node
    firstPtr.next = firstPtr.next.next;
    
    // Return the new head
    return sentinel.next;
};