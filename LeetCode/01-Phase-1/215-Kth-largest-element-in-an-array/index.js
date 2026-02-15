// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/
// given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// with sorting the array
// just sort the array in descending order
// return the element at index k-1

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}

// time complexity: O(nlogn)
// space complexity: O(1)

// without sorting the array
// using priority queue (min-heap)

// using the built-in priority queue of javascript from leetcode
// https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages

// you can find these function here:
// https://datastructures-js.info/docs/priority-queue


// kth largest element — min-heap (priority queue) approach
// intuition:
// we want the element that is the kth largest in the entire array
// naive way is to sort → but that costs O(n log n)
// instead, we maintain a **min-heap of size k**
//
// why a min-heap?
// - the heap will always store the current top k largest elements seen so far
// - the smallest among those k sits at the top
// - whenever the heap grows beyond k, we remove the smallest
// this guarantees:
// - after processing all numbers, the heap contains exactly the k largest values
// - the smallest inside this heap = the kth largest in the array
//
// this is greedy because:
// - we always keep the "best" k candidates (largest numbers)
// - we always drop the smallest candidate whenever size > k

// approach:
// using a built-in min-priority-queue to implement the min-heap
// - create a min-heap
// - iterate over each number in nums:
//       push number into heap
//       if heap.size > k:
//            pop()  // remove the smallest among the k+1
// - after finishing iteration:
//       the heap top is the kth largest element
// - return heap.top


var findKthLargest = function (nums, k) {
  // let pq = new MinPriorityQueue() //this only work in leetcode
  let pq = new MyMinPriorityQueue()

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i])
    if (pq.size() > k) {
      pq.dequeue()
    }
  }
  return pq.front()
}

// my own implementation of minPriorityQueue
class MyMinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // get current heap size
    size() {
        return this.heap.length;
    }

    // get top element without removing
    front() {
        return this.heap[0];
    }

    // insert element
    enqueue(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    // remove top element
    dequeue() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return top;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= element) break;
            this.heap[index] = this.heap[parentIndex];
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let swap = null;

            if (left < length && this.heap[left] < element) swap = left;
            if (right < length && this.heap[right] < (swap === null ? element : this.heap[left])) swap = right;

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}

// time complexity: O(nlogk)
// because pushing only k elements, n times
// space complexity: O(k)
// again, storing only k elements

