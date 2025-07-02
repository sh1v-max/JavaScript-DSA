/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 /**
 * Quick Intuition:
 * Store all nodes from headA in a Set, then traverse headB — the first node also found in the Set is the intersection.
 * This works because intersecting nodes are **by reference**, not just by value.
 *
 * Time: O(m + n), Space: O(m) — where m and n are the lengths of headA and headB.
 */
 
 var getIntersectionNode = function(headA, headB) {
    const set = new Set()

    while(headA){
        set.add(headA)
        headA = headA.next
    }

    while(headB){
        if(set.has(headB)){
            return headB
        }
        headB = headB.next
    }
    return null
};