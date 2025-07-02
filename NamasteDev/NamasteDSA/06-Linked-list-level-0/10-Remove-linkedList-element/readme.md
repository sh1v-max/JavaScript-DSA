## Remove Linked List Elements

### Problem Summary:

Given the `head` of a linked list and an integer `val`, remove **all nodes** with `Node.val === val`, and return the **new head**.


### Intuition:

When removing elements from a linked list:

* If the **head itself** needs to be deleted, special care is required.
* To avoid handling the head separately, we use a **sentinel (dummy) node** at the start.
  This simplifies the deletion logic — you can treat all nodes the same.


### Example:

#### Input:

```
head = [1, 2, 6, 3, 4, 5, 6], val = 6
```

#### Output:

```
[1, 2, 3, 4, 5]
```

> All `6`s are removed, including if they’re at the head or tail.


## Approach: Use Sentinel (Dummy Node)

### Why Sentinel Node?

* Placed **before the head**
* Helps handle edge cases (like deleting the head itself)
* Makes loop logic cleaner


### JavaScript Code:

```javascript
function removeElements(head, val) {
  const sentinel = new ListNode(-1);
  sentinel.next = head;

  let prev = sentinel;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinel.next;
}
```


### Step-by-Step:

1. Create a dummy node (`dummy.next = head`)
2. Initialize `current = dummy`
3. Traverse the list:

   * If `current.next.val === val`, remove the node by skipping it
   * Else, move `current` forward
4. Return `dummy.next` (in case head was removed)


### Time & Space Complexity:

| Metric    | Value |
| --------- | ----- |
| **Time**  | O(n)  |
| **Space** | O(1)  |

You visit each node once. No extra memory used except a pointer.


## Key Edge Cases:

* Head node(s) may need removal
* Entire list might get deleted (return `null`)
* List may be empty to begin with
