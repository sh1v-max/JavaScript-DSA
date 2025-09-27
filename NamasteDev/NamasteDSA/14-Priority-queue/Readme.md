# Priority Queue in JavaScript

## 🔹 What is a Priority Queue?

A **priority queue** is a queue which serves elements **based on priority**, **irrespective of insertion order**.
Unlike a normal queue (FIFO), the element with the **highest or lowest priority** is dequeued first.

### Real-Life Example: Hospital 🏥

* Patient A: Fever
* Patient B: Accident
* Patient C: Headache

**Normal Queue (FIFO):** A → B → C
**Priority Queue (Highest Priority First):** B → C → A

> Higher the priority, faster the treatment.

### Common Use Cases

* CPU Scheduling
* Cache Systems
* Real-Time Systems
* Dijkstra’s Shortest Path Algorithm


## 🔹 Priority Queue Types

1. **Max Priority Queue** → Element with **highest value** has highest priority.
2. **Min Priority Queue** → Element with **lowest value** has highest priority.

> These correspond to **Max Heap** and **Min Heap** implementations.


## 🔹 Implementation Approaches

### 1. Array / Sorting-based

* Push elements into an array with priority.
* Sort array so that highest priority comes first.

```js
let priorityQueue = [];
priorityQueue.push({value: 'task1', priority: 2});
priorityQueue.push({value: 'task2', priority: 1});
priorityQueue.sort((a, b) => a.priority - b.priority); // Min priority first
```

**Time Complexity:**

* Insertion + Sorting → **O(n log n)**

> Sorting works but is **inefficient** for frequent insertions and deletions.


### 2. Heap-based (Recommended)

* **Heap** is a data structure, not a priority queue itself.
* Use **Max Heap / Min Heap** to implement a priority queue efficiently.
* Ensures insertion and removal are done in **O(log n)**.

#### Example: Min Heap-based Priority Queue

```js
class MinHeap {
  constructor() { this.heap = []; }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftIndex(i) { return 2 * i + 1; }
  getRightIndex(i) { return 2 * i + 2; }

  swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }

  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 &&
      this.heap[this.getParentIndex(index)].priority > this.heap[index].priority) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  heapifyDown(index) {
    let smallest = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);

    if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  peek() { return this.heap[0] || null; }
  isEmpty() { return this.heap.length === 0; }
  size() { return this.heap.length; }
}

class PriorityQueueHeap {
  constructor() { this.minHeap = new MinHeap(); }
  enqueue(value, priority) { this.minHeap.insert({ value, priority }); }
  dequeue() { return this.minHeap.extractMin(); }
  peek() { return this.minHeap.peek(); }
  isEmpty() { return this.minHeap.isEmpty(); }
  size() { return this.minHeap.size(); }
}

// ✅ Example usage
const pq = new PriorityQueueHeap();
pq.enqueue("eat", 2);
pq.enqueue("code", 1);
pq.enqueue("sleep", 3);

console.log(pq.dequeue()); // { value: 'code', priority: 1 }
console.log(pq.peek());    // { value: 'eat', priority: 2 }
```


## 🔹 Complexity Comparison

| Implementation  | Enqueue    | Dequeue  | Peek | Best Use Case                  |
| --------------- | ---------- | -------- | ---- | ------------------------------ |
| Array / Sorting | O(n log n) | O(1)     | O(1) | Small datasets, infrequent ops |
| Heap-based      | O(log n)   | O(log n) | O(1) | Large datasets, frequent ops   |


## ✅ Summary

* Priority Queue: Queue where **priority determines order**, not arrival time.
* **Array-based:** Easy to implement, slow `dequeue`.
* **Heap-based:** Efficient insert & delete operations, ideal for algorithms & scheduling.
* Real-life applications: **CPU scheduling, Dijkstra, cache, real-time systems, job/task schedulers**.

