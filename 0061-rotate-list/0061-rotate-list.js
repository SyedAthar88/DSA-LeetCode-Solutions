/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // Edge cases
    if (!head || !head.next || k === 0) return head;
    
    // Step 1: Find length and tail
    let len = 1;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        len++;
    }
    
    // Step 2: Handle large k
    if (k % len === 0) return head;
    k = k % len;
    
    // Step 3: Make circular
    tail.next = head;
    
    // Step 4: Find new tail (at position len - k - 1)
    let newTail = head;
    for (let i = 1; i < len - k; i++) {
        newTail = newTail.next;
    }
    
    // Step 5: Break the circle
    let newHead = newTail.next;
    newTail.next = null;
    
    return newHead;
};