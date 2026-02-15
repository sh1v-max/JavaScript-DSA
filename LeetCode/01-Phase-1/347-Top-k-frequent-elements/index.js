// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// example 2:
// Input: nums = [1], k = 1
// Output: [1]

// top k frequent elements — heap (priority queue) approach
// intuition:
// we need the k elements that appear the most times
// step 1: count frequencies, easy with a hashmap
// step 2:
// instead of sorting all elements by frequency (O(n log n)),
// we maintain a min-heap of size k
// why?
//   - the heap always keeps the top k most frequent elements seen so far
//   - the smallest frequency sits on top
//   - whenever the heap grows beyond k, we remove the smallest
// this ensures:
//   - after processing all elements, heap contains exactly the k most frequent
//   - we avoid full sorting, better performance
// this is greedy because:
//   - we always keep the "best" k candidates seen so far
//   - we always drop the least frequent when size exceeds k

// approach:
// - build a frequency map: element, count
// - create a min-heap prioritized by frequency
// - for each (element, freq):
//       push into heap
//       if heap.size > k:
//            pop()  // remove least frequent
// - heap now contains exactly k most frequent elements
// - extract the values from heap and return them

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

// time complexity:
// O(n) to build frequency map
// O(m log k) to push into heap (m = number of unique elements ≤ n)
// overall: O(n log k)

// space complexity:
// O(n) for map + O(k) for heap
// overall: O(n)
