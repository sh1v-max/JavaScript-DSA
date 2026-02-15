// 90. Subsets II
// https://leetcode.com/problems/subsets-ii/

// given an integer array nums that may contain duplicates, return all possible subsets (the power set)

// the solution set must not contain duplicate subsets. return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// intuition:
// this is a backtracking problem, but when duplicated to handle
// for each number, we either include it or skip it... that gives us 2^n subsets
// but when there are duplicates elements like two 2's, that can lead to duplicate subsets
// sort the array first, then skip over duplicates while exploring choices

// approach:
// sort the nums array to make duplicates adjacent
// use backtracking (similar to subset)
// - Keep a temporary list `path` that stores the current subset.
// - At every recursive call, push the current `path` into the final result `res`.
// For each index `i`, we have two choices: include nums[i] or skip it.
//     - But if nums[i] is the same as nums[i - 1], and `i > start` (i.e., same level duplicate),
//       we skip it to avoid generating duplicate subsets.
// Recurse forward (i + 1) after choosing nums[i], then backtrack (remove last added element)
// Continue until all subsets are explored

var subsetsWithDup = function (nums) {
  // given array nums must be sorted to handle duplicates
  const arr = nums.sort((a, b) => a - b)
  let res = []

  let backtrack = (path, start) => {
    // path represent the current subset being built
    // start is the starting index
    res.push([...path])
    // at every step, add the curr path to the res
    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i - 1] === arr[i]) {
        // only skip duplicates at the same recursion lever
        continue
      }
      path.push(arr[i])
      backtrack(path, i + 1)
      path.pop()
    }
  }
  backtrack([], 0)

  return res
}

//  time complexity: O(n*2^n) as each element can be either included or excluded, has two choices
// space complexity: O(n * 2^n) for the recursion stack and path storage

// valid parentheses
// var isValid = function (s) {
//   const stack = []
//   const map = { ')': '(', '}': '{', ']': '[' }

//   for (let char of s) { // O(n)
//     if (map[char]) {
//       const prev = stack.pop()
//       if (prev !== map[char]) return false
//     } else {
//       stack.push(char)
//     }
//   }
//   return stack.length === 0
// }
