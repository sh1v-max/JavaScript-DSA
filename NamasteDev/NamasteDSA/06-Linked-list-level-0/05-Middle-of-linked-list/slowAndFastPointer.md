# Slow and Fast Pointer

The **slow and fast pointer approach** (also known as the **tortoise and hare algorithm**) is a powerful two-pointer technique used in linked lists and arrays for problems that involve **cycle detection, finding the middle, or relative motion**.


### 🔍 Core Idea

You move two pointers at different speeds:

* **Slow Pointer** moves one step at a time
* **Fast Pointer** moves two steps at a time

As they move, you analyze their positions to detect patterns, such as overlaps (cycle), or reaching a target (middle).


### 🧠 Common Use Cases

1. **Find Middle of Linked List**

```js
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // Middle node
}
```

➡️ When `fast` reaches the end, `slow` is at the **middle**.


2. **Detect Cycle in Linked List**

```js
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true; // They meet inside a loop
  }

  return false;
}
```

➡️ If there's a cycle, slow and fast will **eventually meet**.


3. **Find Starting Point of a Cycle**

After detecting the cycle using the above method:

```js
function detectCycleStart(head) {
  let slow = head;
  let fast = head;

  // First, detect if there's a cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  // No cycle
  if (!fast || !fast.next) return null;

  // Move one pointer to head
  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow; // Start of cycle
}
```

➡️ They meet at the **start of the cycle**.


4. **Happy Number Problem**
   Check if a number leads to 1 or falls into a cycle by squaring digits.
   

### 🧪 Time & Space Complexity

* **Time**: Usually `O(n)`
* **Space**: `O(1)` — constant space, since no extra data structures are used


### 🧠 Intuition

* Like a race: if fast moves twice as fast and there’s a loop, it will catch up to slow
* If there's no loop, fast will reach the end before slow


Let me know if you want visual diagrams or to apply this on a LeetCode problem!
