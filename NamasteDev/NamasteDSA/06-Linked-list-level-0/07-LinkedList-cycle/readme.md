## 1. **Floyd’s Tortoise and Hare Algorithm**

### (Also called the **Slow and Fast Pointer** approach)

This is the most efficient and commonly used method. Floyd said: "Imagine two guys, one slow and one fast, are racing. If there is a loop, the fast guy will eventually catch up to the slow guy."

### Time: O(n)

### Space: O(1)

### Logic:

* Use two pointers:

  * `slow` moves one step at a time
  * `fast` moves two steps at a time
* If there’s a cycle, they **will meet**
* If there's no cycle, `fast` will reach `null`

### Code:

```js
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;           // move 1 step
    fast = fast.next.next;      // move 2 steps

    if (slow === fast) return true; // cycle detected
  }

  return false; // no cycle
}
```

### Example:

* `1 → 2 → 3 → 4 → 5 → 3` (cycle back to node 3) → returns `true`
* `1 → 2 → 3 → 4 → null` → returns `false`


## 2. **Using a Set / HashMap**

You can use a `Set` to store visited nodes.
If any node repeats — there's a cycle.

### Time: O(n)

### Space: O(n) (extra memory)

### Code:

```js
function hasCycle(head) {
  const seen = new Set();

  while (head !== null) {
    if (seen.has(head)) return true; // cycle detected
    seen.add(head);
    head = head.next;
  }

  return false; // no cycle
}
```

### When to Use:

* Useful for debugging or problems where you want to track the **first repeating node**
* Slower and memory-heavy compared to Floyd’s algorithm


## Comparison

| Approach            | Time | Space | Notes                     |
| ------------------- | ---- | ----- | ------------------------- |
| Floyd’s Algorithm   | O(n) | O(1)  | Most efficient, preferred |
| Hash Set / Hash Map | O(n) | O(n)  | Simpler, easier to trace  |

