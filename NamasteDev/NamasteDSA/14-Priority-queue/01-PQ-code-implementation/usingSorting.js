// implementing priority queue using sorting

class PriorityQueue {
    constructor() {
        this.queue = []
    }

    enqueue(value, priority){
        this.queue.push({ value, priority })
        this.queue.sort((a, b) => b.priority - a.priority)
        // highest priority first
    }

    dequeue() {
        return this.queue.shift()
        // remove the first item (highest priority)
    }

    peak() {
        return this.queue[0]
        // looking at the highest priority element
    }

    isEmpty() {
        return this.queue.length === 0
    }
}

const pq = new PriorityQueue()
pq.enqueue("fever", 1)
pq.enqueue("accident", 5)
pq.enqueue("headache", 2)
console.log(pq)
// output:
  // queue: [
  //   { value: 'accident', priority: 5 },
  //   { value: 'headache', priority: 2 },
  //   { value: 'fever', priority: 1 }
  // ]

console.log(pq.dequeue()) // { value: 'accident', priority: 5 }
console.log(pq.peak()) // { value: 'headache', priority: 2 }
console.log(pq.isEmpty()) // false

// sorting implementation is not the most optimal way to implement priority queue because it requires O(n log n) time complexity
// Time complexity: O(n log n)