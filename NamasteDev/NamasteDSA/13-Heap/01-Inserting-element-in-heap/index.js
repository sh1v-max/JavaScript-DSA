// Min heap
// Initial heap = [5, 10, 20, 30] Insert value = 1

// creating a heap and helper functions
class MinHeap {
    constructor() {
        // this.heap = [5, 10, 20, 30]
        this.heap = []
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1
    }

    getRightChildIndex(i) {
        return (2 * i) + 2
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    // adding the element at the end
    insert(val) {
        this.heap.push(val)
        let lastIndex = this.heap.length - 1
        this.heapifyUp(lastIndex)
    }

    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i)
            if (this.heap[i] < this.heap[parentIndex]) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i = parentIndex
            } else {
                break
            }
        }
    }
}

let newHeap = new MinHeap()

newHeap.insert(1)
// [1, 5, 20, 10, 30]
// newHeap.insert(0)
console.log(newHeap)

// or without hardcoded defining heap val we can assign them differently
let heap2 = new MinHeap()
heap2.insert(5)
heap2.insert(10)
heap2.insert(20)
heap2.insert(30)
heap2.insert(1)
heap2.insert(0)
// it will create val, also call heapify on va
console.log(heap2)