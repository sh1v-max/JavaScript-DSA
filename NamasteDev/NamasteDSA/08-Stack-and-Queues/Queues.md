# Queue in JavaScript

A **Queue** is a **linear data structure** that follows the **FIFO (First In, First Out)** principle, meaning the first element added to the queue is the first one removed.


## **Key Characteristics**
- **FIFO**: First element added (enqueued) is the first to be removed (dequeued).
- Elements are added at the **rear** and removed from the **front**.
- Useful in **task scheduling**, **order processing**, **BFS (Breadth-First Search)**, etc.


## **Basic Operations**
1. **enqueue(element)** – Add an element to the rear of the queue.
2. **dequeue()** – Remove and return the front element.
3. **front()** or **peek()** – Return the front element without removing it. *(Note: JavaScript does not have explicit 'front' or 'peek' functions, these are part of queue functionality)*
4. **isEmpty()** – Check if the queue is empty.
5. **size()** – Get the number of elements in the queue.
6. **clear()** – Remove all elements from the queue.


### **Example Flow**

- queue.enqueue(1) → `[1]`
- queue.enqueue(3) → `[1, 3]`
- queue.dequeue() → returns `1` → `[3]`
- queue.front() → returns `3` *(Note: JavaScript does not have explicit 'front' function, this is part of queue functionality)*


## **Time & Space Complexity**

| Operation   | Time Complexity |
|-------------|-----------------|
| enqueue     | O(1)            |
| dequeue     | O(1)\*          |
| front/peek  | O(1) *(Note: JavaScript does not have explicit 'front' or 'peek' functions, these are part of queue functionality)* |
| isEmpty     | O(1)            |
| size        | O(1)            |

\* **Note**: If implemented using arrays with `shift()`, dequeue is O(n) because shifting re-indexes elements.  
**Optimized** queues avoid this by using an object-based approach.

- **Space Complexity**: O(n), where n is the number of elements stored.


## **JavaScript Implementation**

### **Approach 1: Using an Array**
This is the simplest but not the most optimal approach for large data due to `shift()` cost.

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the rear
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return front element
  dequeue() {
    if (this.isEmpty()) return "Queue Underflow";
    return this.items.shift(); // O(n)
  }

  // Get front element
  front() {
    if (this.isEmpty()) return "No elements in queue"; // *(Note: JavaScript does not have explicit 'front' function, this is part of queue functionality)*
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size
  size() {
    return this.items.length;
  }

  // Clear queue
  clear() {
    this.items = [];
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front());  // 10 *(Note: JavaScript does not have explicit 'front' function, this is part of queue functionality)*
console.log(queue.dequeue()); // 10
console.log(queue.size());   // 1
```


### **Approach 2: Using an Object (Optimized)**

This avoids the O(n) `shift()` by tracking the front and rear indices.

```javascript
class QueueObject {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }

  enqueue(element) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue Underflow";
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  front() {
    if (this.isEmpty()) return "No elements in queue"; // *(Note: JavaScript does not have explicit 'front' function, this is part of queue functionality)*
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.rearIndex === this.frontIndex;
  }

  size() {
    return this.rearIndex - this.frontIndex;
  }

  clear() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }
}

// Example
const queue2 = new QueueObject();
queue2.enqueue(1);
queue2.enqueue(2);
console.log(queue2.front());  // 1 *(Note: JavaScript does not have explicit 'front' function, this is part of queue functionality)*
queue2.dequeue();
console.log(queue2.size());   // 1
```


## **Real-World Examples of Queues**

1. **Task Scheduling** (e.g., CPU processes).
2. **Printer job queues**.
3. **Breadth-First Search (BFS)** in trees and graphs.
4. **Order processing systems**.
5. **Call center waiting lines**.


## **Example Problem: Implementing a Circular Queue**

A **circular queue** connects the end back to the front to reuse space efficiently.

```javascript
class CircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.maxSize = k;
    this.front = 0;
    this.rear = -1;
    this.count = 0;
  }

  enqueue(value) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.maxSize;
    this.queue[this.rear] = value;
    this.count++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.maxSize;
    this.count--;
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.rear];
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.maxSize;
  }
}
```


## **Queue vs Stack**

| Feature   | Queue (FIFO)    | Stack (LIFO)             |
| --------- | --------------- | ------------------------ |
| Insertion | Enqueue (rear)  | Push (top)               |
| Deletion  | Dequeue (front) | Pop (top)                |
| Use Cases | Scheduling, BFS | Undo, Recursion, Parsing |


## **Key Takeaways**

* Queues follow **FIFO**, opposite to stacks.
* Avoid using `shift()` for large data due to O(n) complexity.
* Essential for **BFS algorithms** and **task management systems**.


## **Further Reading**

* [MDN Web Docs: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [GeeksforGeeks – Queue Data Structure](https://www.geeksforgeeks.org/queue-data-structure/)
* [LeetCode Queue Problems](https://leetcode.com/tag/queue/)

