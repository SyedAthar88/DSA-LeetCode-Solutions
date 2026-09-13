/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null || head.next === null) return head;
    
    let odd = head;
    let even = head.next;
    let evenHead = even;  // Save the head of even list
    
    while (even !== null && even.next !== null) {  // ✅ Fixed!
        odd.next = even.next;   // Link odd to next odd
        odd = odd.next;         // Move odd forward
        
        even.next = odd.next;   // Link even to next even
        even = even.next;       // Move even forward
    }
    
    odd.next = evenHead;  // Connect odd list to even list
    return head;
};