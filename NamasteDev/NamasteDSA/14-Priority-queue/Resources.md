# Priority Queue Implementation in JavaScript

JavaScript doesn't provide a native Priority Queue data structure. This repository demonstrates two approaches to using priority queues in JavaScript: implementing a custom solution using a binary heap and utilizing LeetCode's built-in priority queue library.

## Custom Implementation

### Min Priority Queue using Binary Heap

This implementation creates a Min Priority Queue where the smallest element has the highest priority. The underlying data structure is a binary heap stored in an array.

```js
class MyMinPriorityQueue {
  constructor() {
    this.heap = []
  }

  // Get current heap size
  size() {
    return this.heap.length
  }

  // Get top element without removing
  front() {
    return this.heap
  }

  // Insert element
  enqueue(val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  // Remove top element
  dequeue() {
    const top = this.heap
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap = end
      this.heapifyDown()
    }
    return top
  }

  heapifyUp() {
    let index = this.heap.length - 1
    const element = this.heap[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[parentIndex] <= element) break
      this.heap[index] = this.heap[parentIndex]
      index = parentIndex
    }
    this.heap[index] = element
  }

  heapifyDown() {
    let index = 0
    const length = this.heap.length
    const element = this.heap
    while (true) {
      let left = 2 * index + 1
      let right = 2 * index + 2
      let swap = null

      if (left < length && this.heap[left] < element) swap = left
      if (
        right < length &&
        this.heap[right] < (swap === null ? element : this.heap[left])
      )
        swap = right

      if (swap === null) break

      this.heap[index] = this.heap[swap]
      index = swap
    }
    this.heap[index] = element
  }
}
```

### Key Features
- **Time Complexity:** O(log n) for enqueue and dequeue operations
- **Space Complexity:** O(n) for storing elements
- **Heap Property:** Parent nodes are always smaller than their children (min heap)

## LeetCode Built-in Solution

LeetCode provides a built-in priority queue implementation through the `@datastructures-js/priority-queue` library, which is available in their JavaScript environment without additional imports.

```js
const numbersQueue = new MinPriorityQueue()
numbersQueue.enqueue(5).enqueue(3).enqueue(8)
console.log(numbersQueue.front()) // Returns: { element: 3, priority: 3 }
```

### Available Classes
- `MinPriorityQueue` - Elements with smaller values have higher priority
- `MaxPriorityQueue` - Elements with larger values have higher priority

For more details, refer to the [LeetCode JS Priority Queue Documentation](https://datastructures-js.info/docs/priority-queue).

## Usage Examples

### Custom Implementation Example

```js
const pq = new MyMinPriorityQueue()

// Add elements
pq.enqueue(10)
pq.enqueue(5)
pq.enqueue(20)
pq.enqueue(1)

console.log(pq.front()) // 1
console.log(pq.size())  // 4

// Remove elements in priority order
console.log(pq.dequeue()) // 1
console.log(pq.dequeue()) // 5
console.log(pq.dequeue()) // 10
console.log(pq.dequeue()) // 20
```

### LeetCode Environment Example

```js
// For competitive programming problems
const minPQ = new MinPriorityQueue()
const maxPQ = new MaxPriorityQueue()

// Add elements with automatic priority assignment
minPQ.enqueue(15).enqueue(10).enqueue(25)
maxPQ.enqueue(15).enqueue(10).enqueue(25)

console.log(minPQ.front().element) // 10
console.log(maxPQ.front().element) // 25
```

## Method Customization

You can easily customize method names to match your preferred naming convention:

```js
class CustomPriorityQueue extends MyMinPriorityQueue {
  // Alternative method names
  push(val) { return this.enqueue(val) }
  pop() { return this.dequeue() }
  top() { return this.front() }
  length() { return this.size() }
  isEmpty() { return this.size() === 0 }
}
```

## When to Use Each Approach

### Custom Implementation
- **Local development** and personal projects
- When you need **full control** over the implementation
- **Learning purposes** and algorithm understanding
- Environments without built-in priority queue support

### LeetCode Built-in
- **Competitive programming** on LeetCode platform
- **Quick prototyping** during contests
- When **time efficiency** in coding is crucial
- Focus on problem-solving rather than data structure implementation

## Resources
- [LeetCode Programming Environment Documentation](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages)
- [DataStructures-JS Priority Queue Documentation](https://datastructures-js.info/docs/priority-queue)
