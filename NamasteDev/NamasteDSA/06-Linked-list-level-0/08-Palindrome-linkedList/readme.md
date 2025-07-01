# **Palindrome Linked List**

> **Leetcode #234**
> Check whether a singly linked list is a palindrome.


### Problem Summary:

You're given the **head of a singly linked list**.
You must return `true` if it is a **palindrome** — i.e., the sequence of values reads the same forward and backward.


## Examples:

```text
Input:  1 → 2 → 2 → 1     → Output: true
Input:  1 → 2             → Output: false
Input:  1 → 2 → 3 → 2 → 1 → Output: true
```


## Intuition:

### 🔹 Brute-force (Using Array):

* The simplest way to check symmetry is by **converting the list into an array** and then checking if the array is a palindrome.
* This works because arrays allow **index-based access**, so you can easily compare both ends.

> Great for understanding the problem, not ideal in space optimization.


### 🔸 Optimized (Reverse Half In-Place):

* Use the **slow & fast pointer technique** to find the **middle** of the list.
* **Reverse the second half** of the list starting from the middle.
* Now, **compare** the first half and the reversed second half node by node.
* If all values match, it’s a palindrome.
* **(Optional)**: Restore the list to its original form if mutation is not allowed.

> Elegant, in-place, and the go-to solution in interviews.


## Approach 1: Convert to Array and Check

```javascript
function isPalindrome(head) {
  const arr = [];
  let current = head;

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  let left = 0, right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }

  return true;
}
```

### Time Complexity: `O(n)`

* Traverse the list once to build the array.
* Then check array symmetry in another pass.

### Space Complexity: `O(n)`

* You use an extra array to store all node values.


## Approach 2: Reverse Second Half and Compare

```javascript
function isPalindrome(head) {
  if (!head || !head.next) return true;

  // Step 1: Find middle
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // Step 3: Compare halves
  let first = head, second = prev;
  while (second) {
    if (first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }

  return true;
}
```

### Time Complexity: `O(n)`

* One pass to find the middle
* One pass to reverse second half
* One pass to compare

### Space Complexity: `O(1)`

* In-place operations — no extra space used except a few pointers.


## Key Takeaways:

* If **space isn’t a concern**, array-based method is simple and readable.
* For optimal solutions, **reverse half the list** and compare.
* Knowing **how to use slow & fast pointers** and reverse a list in-place is crucial for these types of problems.
* Be cautious when modifying the list — in production, you might need to **restore it afterward**.


## Related Topics:

* Linked List
* Two Pointer
* In-Place Algorithms
* Palindromes

