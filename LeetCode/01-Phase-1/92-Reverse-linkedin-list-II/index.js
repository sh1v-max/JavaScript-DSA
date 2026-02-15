// 92. Reverse Linked List II
// https://leetcode.com/problems/reverse-linked-list-ii/

// given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

// you're given an array of coin denominations (coins[])
// and a target value (amount)
// the task: find the minimum number of coins required
// to form exactly 'amount'
// if it's impossible → return -1
//
// unlimited supply of each coin
// coin order does NOT matter
// classic unbounded knapsack / coin change DP problem

// why this is tricky?
// You are NOT reversing the whole list.
// You’re reversing a middle segment, which means you must carefully preserve:
// the node before the reversed segment
// the node after the reversed segment
// the segment itself (while reversing)
// This requires pointer manipulation in three stages.

// example:
// list: 1 -> 2 -> 3 -> 4 -> 5
// left = 2, right = 4
// reversed area = 2,3,4 → becomes 4,3,2
// final list = 1 -> 4 -> 3 -> 2 -> 5

// intuition:
// - reversing a portion of a linked list in-place requires
//   precise pointer juggling (prev, next, boundaries, etc.)
// - the naive way avoids all pointer manipulation completely:
//        treat the linked list as if it were an array
// - step 1: convert the entire linked list into an array of values
//           → arrays give random access and easy subarray reversal
// - step 2: reverse only the segment between (left-1) and (right-1)
//           since left/right are 1-indexed
// - step 3: write the modified array values back into the list nodes
// - this does NOT reverse the nodes themselves,
//   only the values stored in the nodes — but the final list matches
//   the required output exactly.
// - this method is simple, clear, and cannot break pointers.
//   downside: uses extra space O(n), not optimal,
//   but perfect for understanding what the problem wants.