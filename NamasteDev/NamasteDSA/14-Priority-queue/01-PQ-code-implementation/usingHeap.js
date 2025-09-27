// implementing priority queue using heap

class MaxPriorityQueue {
  constructor() {
    this.heap = []
  }

  // enqueue (similar to inserting an element in heap)
  enqueue(value, priority) {
    this.heap.push({ value, priority })
    this.heapifyUp()
  }

  // move node up (heapify up)
  heapifyUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2)
      if (this.heap[index].priority <= this.heap[parent].priority) break
      ;[this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ]
      // this.swap(index, parent)
      index = parent
    }
  }

  // move node down (heapify down)
  heapifyDown() {
    let index = 0
    let length = this.heap.length
    while (true) {
      let left = 2 * index + 1
      let right = 2 * index + 2
      let largest = index

      if (
        left < length &&
        this.heap[left].priority > this.heap[largest].priority
      ) {
        largest = left
      }

      if (
        right < length &&
        this.heap[right].priority > this.heap[largest].priority
      ) {
        largest = right
      }

      if (largest === index) break
      this.swap(index, largest)
      index = largest
    }
  }

  // dequeue, getting element(highest priority) out from priority queue
  dequeue() {
    if (this.heap.length === 0) return null
    const max = this.heap[0]
    const end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this.heapifyDown()
    }
    return max
  }

  // View front item
  front() {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  size() {
    return this.heap.length
  }

  // Is Empty?
  isEmpty() {
    return this.heap.length === 0
  }

  // Swap Helper
  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

const pq = new MaxPriorityQueue()
pq.enqueue('Google', 1)
pq.enqueue('Facebook', 2)
pq.enqueue('Amazon', 3)
pq.enqueue('Microsoft', 4)
pq.enqueue('Apple', 5)
console.log(pq.front().value)


// Time complexity: O(log n)