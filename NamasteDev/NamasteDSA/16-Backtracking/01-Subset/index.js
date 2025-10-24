// 78. Subsets
// https://leetcode.com/problems/subsets/

// given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// example 2:
// Input: nums = [0]
// Output: [[],[0]]

// intuition: backtracking
// every subset can be built by either including or excluding each number
// at each step, we can "choose" a number to add to the current subset (path) or skip it
// backtracking allows us to explore all possible combinations
// the empty subset is included automatically because we push the current path at the start of the function
// path.pop() ensures we "un-choose" the number after exploring deeper, so other combinations can be formed

// approach:
// initialize result array to store all subsets
// define backtrack function with current path and start index
// push a copy of the current path into result (includes empty subset)
// loop i from start to nums.length:
//   push nums[i] to path (choose)
//   recursively call backtrack(path, i + 1) to explore further numbers
//   pop from path (un-choose / backtrack) to try other possibilities
// call backtrack([], 0) to start recursion
// return result

function subset(nums) {
  let res = []

  let backtrack = (path, start) => {
    // initially path is empty, so we push empty array first
    res.push([...path])
    // adding copy on the current elem, not the reference because it's changing every time
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(path, i + 1)
      // doing i + 1 because we don't want to include the same element again
      path.pop()
      // and then when we backtrack, we remove the last element from path
    }
  }
  backtrack([], 0)
  return res
}

// time complexity: O(n * 2^n)
// space complexity: O(n)