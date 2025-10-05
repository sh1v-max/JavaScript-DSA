// given head of sorted linked list, remove duplicates
// return head

// approach:
// iterate through the list with curr pointer
// check if curr.val === curr.next.val
// if yes, skip the node by curr.next = curr.next.next
// else, curr = curr.next

function removeDuplicates(head) {
  let curr = head
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
}

// time complexity: O(n)
// space complexity: O(1)

// using set
// intuition:
// we need to remove duplicate nodes from a sorted linked list
// - since the list is sorted, duplicates (if any) will always be adjacent
// - using a Set, we can track which values have already been seen
// - if a value already exists in the Set, it's a duplicate, skip that node
// - otherwise, add the value to the Set and move forward

// approach:
// create an empty Set to store unique values
// traverse the linked list with two pointers: prev and curr
// for each node:
// - if curr.val already in Set, remove it by linking prev.next = curr.next
// - else, add curr.val to Set and move prev forward
// return head

function deleteDuplicates(head) {
  if (!head) return null

  const seen = new Set()
  let current = head
  let prev = null

  while (current) {
    if (seen.has(current.val)) {
      // duplicate found, skip this node
      prev.next = current.next
    } else {
      seen.add(current.val)
      prev = current
    }
    current = current.next
  }

  return head
}

// time complexity: O(n), single pass through the list
// space complexity: O(n), storing unique values in a Set
