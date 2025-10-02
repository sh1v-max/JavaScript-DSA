// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// example 2:
// Input: nums = [1], k = 1
// Output: [1]

// intuition:
// we need the k elements that appear most frequently in nums
// - first, count frequency of each element using a map
//   - key = element, value = count
// - instead of sorting the entire array by frequency (O(n log n)), we can maintain
//   a min-heap of size k to keep track of the k most frequent elements
// - min-heap property:
//   - top of heap always contains the element with the smallest frequency among current k
//   - when heap size exceeds k, remove the smallest frequency element
// - after iterating all elements, heap contains the k most frequent elements
// - convert heap to array and extract values as the result

// approach:
// 1. iterate through nums and build frequency map
// 2. create min-heap of size k using frequency as priority
// 3. iterate through map entries:
//    - push {val, freq} into heap
//    - if heap size > k, remove top element (smallest freq)
// 4. convert heap to array and map to extract only the element values
// 5. return the array of k most frequent elements

var topKFrequent = function (nums, k) {
  // create a map of frequencies
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
  }

  console.log(map)

  // add element to min priority queue with size k
  let pq = new MinPriorityQueue((x) => x.freq)
  // pq = new MinPriorityQueue({ priority: (x) => x.freq })
  // pq = new MinPriorityQueue({ priority: function(x) { return x.freq } })
  // both ways work
  // comparator function is passed as argument to MinPriorityQueue constructor to create a min heap based on frequency/value of the object
  for (let key in map) {
    pq.push({ val: key, freq: map[key] })
    // we're pushing an object with key and val pair, not pushing single value,
    if (pq.size() > k) {
      pq.pop() // removing the smallest element if size exceeds k
    }
  }
  // const res = pq.toArray()
  const res = pq.toArray().map((x) => Number(x.val))
  // converting the heap to an array and mapping to get only the values
  // we also need to convert string into num
  console.log(res)
  return res
}
