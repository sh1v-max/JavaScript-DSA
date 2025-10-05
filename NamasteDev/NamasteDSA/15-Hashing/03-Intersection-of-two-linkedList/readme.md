## Intersection of Two Linked Lists

> Find the node at which two singly linked lists intersect. If no intersection, return `null`.


### Problem Summary:

You are given **two singly linked lists**, `headA` and `headB`. Return the node where the two lists **intersect**, or `null` if they do not intersect.

The intersection is **by reference**, not value — you must return the **exact node**, not a new one with the same value.


## Examples:

### Example 1:

```
List A:       4 → 1
                      ↘
                        8 → 4 → 5
                      ↗
List B:   5 → 6 → 1
```

Output: Node with value `8`


## Intuition:

Two linked lists may converge at a common node.
We want to detect that shared node **by memory reference**, not by value.

We need a way to
1. Detect if the lists **share any node**
2. Return the **first common node**


## Brute-force (Compare Each Node) — O(n²)

### Idea:

Loop through each node in `headA`, and for every node, loop through `headB` to check if any node is the **same by reference**.


### JavaScript Code:

```javascript
function getIntersectionNode(headA, headB) {
  let currA = headA;

  while (currA) {
    let currB = headB;
    while (currB) {
      if (currA === currB) return currA;
      currB = currB.next;
    }
    currA = currA.next;
  }

  return null;
}
```

### Complexity:

* **Time:** O(n × m)
* **Space:** O(1)
* ✅ Very simple, but **very inefficient** for large lists


## Better Approach (Using Set) — O(n + m)

### Idea:

* Store all nodes from `headA` in a **Set** (reference, not value)
* Then traverse `headB` and check if any node exists in the set


### JavaScript Code:

```javascript
function getIntersectionNode(headA, headB) {
  const visited = new Set();

  let currA = headA;
  while (currA) {
    visited.add(currA);
    currA = currA.next;
  }

  let currB = headB;
  while (currB) {
    if (visited.has(currB)) return currB;
    currB = currB.next;
  }

  return null;
}
```

### Complexity:

* **Time:** O(n + m)
* **Space:** O(n) for the Set
* ✅ Much faster, still very readable


## Optimized Approach (Two Pointers) — O(n + m), O(1) Space

> (Bonus: Since you didn’t ask for this one — but in interviews, **this is preferred**)

### Idea:

* Use two pointers: `pA` and `pB`
* Move both through their lists
* When they reach the end, redirect to the other list’s head
* Eventually, they will either **meet at the intersection** or **both hit null**


### Code:

```javascript
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA, pB = headB;

  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;
}
```

### Complexity:

* **Time:** O(n + m)
* **Space:** O(1)
* ✅ Best approach — memory efficient, fast, elegant


## Method Comparison:

| Method              | Time     | Space | Notes                              |
| ------------------- | -------- | ----- | ---------------------------------- |
| Brute-force Compare | O(n × m) | O(1)  | Easy but slow                      |
| Set Method          | O(n + m) | O(n)  | Faster but uses extra space        |
| Two-pointer (best)  | O(n + m) | O(1)  | Optimal — fastest + no memory cost |


## Key Takeaways:

* Intersection = **same reference**, not same value
* Use Set or Two-pointer for practical scenarios
* Two-pointer method is great for **interview performance**
