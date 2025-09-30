// Kth largest element in a stream
// https://leetcode.com/problems/kth-largest-element-in-a-stream/

// You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

// You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

// Implement the KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
// int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.

// example 1:
// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8

// example 2:
// Input
// ["KthLargest", "add", "add", "add", "add"]
// [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]
// Output
// [null, 7, 7, 7, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
// kthLargest.add(2);   // return 7
// kthLargest.add(10);  // return 7
// kthLargest.add(9);   // return 7
// kthLargest.add(9);   // return 8

// intuition:
// we want the kth largest element in a dynamic stream of numbers
// - keeping all numbers sorted every time is too slow
// - we only care about the k largest numbers at any time
// - use a min heap of size k to track k largest numbers
//   - the top of the heap (smallest in heap) is the kth largest
// when a new number comes:
// - if heap has less than k elements, add it
// - else if number > heap top, replace top with new number
// - else ignore, number too small to affect kth largest

// example: k = 3, nums = [4,5,8,2]
// initial heap after adding nums (size <= k) -> [5,8,4] (min heap top = 4)
// add 3 -> 3 < 4, ignore, kth largest = 4
// add 5 -> 5 > 4, pop 4, push 5, heap = [5,8,5], kth largest = 5
// add 10 -> 10 > 5, pop 5, push 10, heap = [5,10,8], kth largest = 5
// add 9 -> 9 > 5, pop 5, push 9, heap = [8,10,9], kth largest = 8

// approach:
// 1. initialize k and min heap
//    - store k in the instance for reference
//    - create a min heap to maintain k largest numbers
// 2. add initial numbers from nums
//    - for each number, call add() method
//    - ensures heap never grows larger than k
// 3. add(val) method
//    a. if heap size < k
//       - simply push val into heap
//    b. else if val > heap top
//       - pop the smallest (heap top)
//       - push val into heap
//    c. else
//       - val is too small, ignore
//    d. return heap top as kth largest

var KthLargest = function (k, nums) {
  this.k = k // store k
  this.heap = new MyMinPriorityQueue()
  // min heap to track k largest elements

  // initialize the heap with existing numbers
  for (let num of nums) {
    this.add(num)
    // use add method to maintain heap size ≤ k
  }
}

KthLargest.prototype.add = function (val) {
  if (this.heap.size() < this.k) {
    // if heap has less than k elements, just add
    this.heap.enqueue(val)
  } else if (val > this.heap.front()) {
    // if val is bigger than current kth largest, replace
    this.heap.dequeue() // remove smallest among k largest
    this.heap.enqueue(val) // add new value
  }

  // top of heap is always the kth largest
  return this.heap.front()
}

// implementation of minPriorityQueue
class MyMinPriorityQueue {
  constructor() {
    this.heap = []
  }

  // get current heap size
  size() {
    return this.heap.length
  }

  // get top element without removing
  front() {
    return this.heap[0]
  }

  // insert element
  enqueue(val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  // remove top element
  dequeue() {
    const top = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end
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
    const element = this.heap[0]
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

// time complexity
//    - constructor: O(n log k) for inserting n numbers into heap of size k
//    - add(): O(log k) for each insertion/replacement
// space complexity
//    - O(k) for heap, only storing k largest numbers
// key idea
//    - by maintaining min heap of size k, heap top always gives kth largest
//    - new numbers only affect heap if they are larger than current kth largest
