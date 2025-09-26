# **Stable Sorting Algorithm – Notes**

### **Definition**

* A sorting algorithm is **stable** if it **preserves the relative order of equal elements**.
* Equal elements remain in the same order as in the input.


### **Why Stability Matters**

* Important when sorting **multi-level criteria** (e.g., sort by age, then by name).
* Preserves earlier sort order for elements considered “equal” in the current sort.

**Example:**

Input:

```js
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 25 }
];
```

Sort by `age` (ascending):

* **Stable result:**

  ```
  Bob (20), Alice (25), Charlie (25)
  ```
* **Unstable result:**

  ```
  Bob (20), Charlie (25), Alice (25)
  ```


### **Stable Sorting Algorithms**

* **Merge Sort** ✅
* **Insertion Sort** ✅
* **Bubble Sort** ✅
* **TimSort** (used in modern JS engines, like Chrome V8) ✅


### **Unstable Sorting Algorithms**

* **Quick Sort** ❌ (classic implementation)
* **Heap Sort** ❌


### **Quick Analogy**

* **Stable:** “twins stay in same order” 👯‍♂️
* **Unstable:** “twins may swap order” 🔀


### **Use Cases**

* Multi-level sorting:

  ```js
  // Sort by name first
  people.sort((a,b)=>a.name.localeCompare(b.name));
  // Then sort by age (stable sort keeps names order)
  people.sort((a,b)=>a.age - b.age);
  ```
* Preserves input order when equality matters.


### **Key Points**

* Stability ensures **predictable sorting behavior** for equal elements.
* Modern JS `Array.sort()` is **mostly stable**, but check engine documentation.

