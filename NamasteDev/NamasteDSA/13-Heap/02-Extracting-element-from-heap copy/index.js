// Min heap
// Initial heap = [5, 10, 20, 30] Insert value = 1

// creating a heap and helper functions
class MinHeap {
  constructor() {
    // this.heap = [5, 10, 20, 30]
    this.heap = []
  }

  getLeftChildIndex(i) {
    return 2 * i + 1
  }

  getRightChildIndex(i) {
    return 2 * i + 2
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  // ========================================================
  // for insertion (heapify up)
  insert(val) {
    this.heap.push(val)
    let lastIndex = this.heap.length - 1
    this.heapifyUp(lastIndex)
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i)
      if (this.heap[i] < this.heap[parentIndex]) {
        ;[this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ]
        i = parentIndex
      } else {
        break
      }
    }
  }

  // ========================================================
  // for extraction (heapify down)
  extract() {
    if (this.heap.length < 1) return null

    let min = this.heap[0]
    let lastIndex = this.heap.length - 1

    ;[this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]]

    this.heap.pop()
    this.heapifyDown(0)
    return min
  }

  heapifyDown(i) {
    let left = this.getLeftChildIndex(i)
    let right = this.getRightChildIndex(i)
    let n = this.heap.length

    // checking for the smallest value among left and right
    let smallest = i
    if (right < n && this.heap[right] < this.heap[smallest]) {
      smallest = right
    }
    if (left < n && this.heap[left] < this.heap[smallest]) {
      smallest = left
    }
    // swapping and then calling heapify down recursively
    if (smallest != i) {
      ;[this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
      this.heapifyDown(smallest)
    }
  }

  // ========================================================
  // peak function
  peak() {
    if (this.heap.length < 1) return null
    return this.heap[0]
  }
}

let newHeap = new MinHeap()

newHeap.insert(1)
// [1, 5, 20, 10, 30]
// newHeap.insert(0)
// console.log(newHeap)

// or without hardcoded defining heap val we can assign them differently
let heap2 = new MinHeap()
heap2.insert(5)
heap2.insert(10)
heap2.insert(20)
heap2.insert(30)
heap2.insert(1)
heap2.insert(0)
console.log(heap2.heap)
console.log('extracted val1: ' + heap2.extract())
console.log('extracted val2: ' + heap2.extract())
console.log(heap2.heap)
