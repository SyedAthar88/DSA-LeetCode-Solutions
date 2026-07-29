/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // If list is empty or has only one node
    if (head === null || head.next === null) {
        return null;
    }
    let slow = head;
    let fast = head;
    let hasCycle = false
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    // If no cycle, return null
    if (!hasCycle) {
        return null;
    }
    // Step 2: Find where the cycle starts
    // Reset slow to head, keep fast at meeting point
    slow = head;

    // Move both at same speed (1 step)
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // They meet at the cycle start!
    return slow;
};