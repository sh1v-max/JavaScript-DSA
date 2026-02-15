// 239. Sliding Window Maximum
// https://leetcode.com/problems/sliding-window-maximum/

// Given an array nums and a window size k, return the maximum values of each window of size k sliding over the array.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

//? 239. Sliding Window Maximum

// approach:two pointer, sliding window, monotonic deque
// deque is a double ended queue, you can add and remove elements from both ends and can access element from both ends
// monotonic deque is a deque where the elements are in non-decreasing order
// we will use deque to store the indices of the elements in the current window

// intuition:
// we only need max element in each window, so we can use deque to store values in decreasing order
// this way the front will always have the max of current window
// when adding a new element, remove all smaller ones from the back since they can never be max
// when sliding, if the element leaving the window is same as q[0], pop it from front
// so deque always stays valid for the window

// approach:
// make an array res to store result
// use deque q to store elements in decreasing order
// keep two pointers i for left of window and j for right
// while j < arr.length
// pop from back while arr[j] > q.back()
// push arr[j]
// if window size is k (j >= k - 1)
// push q[0] into res (current max)
// if arr[i] == q[0], shift q (remove from front)
// move i forward
// move j forward
// return res

function maxSlidingWindow(nums, k) {
  let res = []
  let q = []

  let i = 0
  let j = 0
  while (j < nums.length) {
    // push the element in queue, but before that
    // we have to pop all smaller elements from back
    while (q.length && nums[j] > q[q.length - 1]) {
      q.pop()
    }
    q.push(nums[j])

    // now we will update the window
    // but before that we will check if first elem is max, because we don't need that anymore
    if (j >= k - 1) {
      res.push(q[0])
      // if outgoing element is the max, pop it
      if (nums[i] == q[0]) {
        q.shift()
      }
      i++
    }
    j++
  }
  return res
}

// time complexity: O(n)
// space complexity: O(k)

// another approach: two pointer, sliding window, monotonic deque (storing indices)

// intuition:
// we only need max element in each window, so we can use deque to store the indices of elements in decreasing order
// so the front index always represents the max element in current window
// keep a pointer i for left side of window, j for right
// when sliding, if the index at q[0] goes out of window (q[0] < i), pop from front
// this way deque always contains only valid indices within current window
// works because any smaller element behind a larger one will never be needed again, so we discard them early

// approach:
// use deque to store indices in decreasing order of arr values
// while j < arr.length
// pop from back while arr[j] > arr[q.back()]
// push j into deque
// if window is size k (j >= k-1)
// push arr[q[0]] into result (max of current window)
// if q[0] < i (index out of window), shift from front
// move i forward
// return result

function maxSlidingWindow(nums, k) {
  let res = []
  let q = []

  for (let j = 0; j < nums.length; j++) {
    // remove smaller elements (not useful for max)
    while (q.length && nums[j] >= nums[q[q.length - 1]]) {
      q.pop()
    }

    // push current index
    q.push(j)

    // remove indices out of window
    if (q[0] <= j - k) {
      q.shift()
    }

    // if window is full, add max
    if (j >= k - 1) {
      res.push(nums[q[0]])
    }
  }
  return res
}

// time complexity: O(n)
// space complexity: O(k)