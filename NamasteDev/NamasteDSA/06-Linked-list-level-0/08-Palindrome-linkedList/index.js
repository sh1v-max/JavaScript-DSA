// write a function to check if a linked list is a palindrome

// approach one
// using array, converting linked list into array and then checking if the array is a palindrome

function isPalindrome(head) {
  const arr = []

  let curr = head
  while (curr !== null) {
    arr.push(curr.val)
    curr = curr.next
  }

  let l = 0
  let r = arr.length - 1

  while (l < r) {
    if (arr[l] !== arr[r]) {
      return false
    }
    l++
    r--
  }

  return true
}

// time complexity = O(n)
// space complexity = O(n)

// approach two
// find the middle using slow and fast approach
// reverse the second half using temp variable
// compare corresponding element in first and second half

function isPalindrome(head) {
  if (!head || !head.next) return true //checking the corner case

  // Step 1: Find middle using slow and fast pointers
  let slow = head,
    fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // Step 2: Reverse the second half
  let prev = null,
    curr = slow
  while (curr) {
    let nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }

  // Step 3: Compare first and second half
  let first = head,
    second = prev
  while (second) {
    if (first.val !== second.val) return false
    first = first.next
    second = second.next
  }

  return true
}

// time complexity = O(n)
// space complexity = O(1)
