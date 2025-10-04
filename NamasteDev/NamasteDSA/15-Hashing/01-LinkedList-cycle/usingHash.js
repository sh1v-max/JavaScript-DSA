// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

// given the head of a linked list, return true if there is a cycle in the linked list

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// intuition:
// we need to detect if a linked list has a cycle
// - a cycle exists if while traversing the list, we encounter the same node more than once
// - to detect this, we can keep track of nodes we've seen using a set
//   - set allows O(1) lookup to check if a node has been visited
// - traverse the list starting from head
//   - if current node is in the set → cycle exists → return true
//   - else → add current node to set and move to next node
// - if we reach the end of the list (null) without revisiting any node → no cycle → return false

// approach:
// create an empty set to store visited nodes
// start from head
// while current node is not null:
// - if current node is in set → return true
// - else → add node to set
// - move to next node
// if traversal ends → return false (no cycle)

var hasCycle = function (head) {
  // use set to keep track of all the nodes that has been visited
  let set = new Set()
  let curr = head
  while (curr) {
    // if the node has been visited before, then there is a cycle
    if (set.has(curr)) return true
    // add the node to the set
    set.add(curr)
    // move to the next node
    curr = curr.next
  }
  // if we have visited all the nodes and haven't found a cycle, then there is no cycle
  return false
}

// time complexity: O(n)
// space complexity: O(n)
