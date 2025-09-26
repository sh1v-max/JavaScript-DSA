// write a function to detect a cycle in a linked list
// using set

var hasCycle = function(head){
  // use set to keep track of all the nodes that has been visited
  let set = new Set();
  let curr = head
  while(curr){
    // if the node has been visited before, then there is a cycle
    if(set.has(curr)) return true;
    // add the node to the set
    set.add(curr);
    // move to the next node
    curr = curr.next;
  }
  // if we have visited all the nodes and haven't found a cycle, then there is no cycle
  return false;
}

// time complexity: O(n)
// space complexity: O(n)