// 46. Permutations
// https://leetcode.com/problems/permutations/

// given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order

// intuition
// a permutation is a unique ordering of elements.
// to form all permutations, we can build them step by step — at each step, choose one unused element and place it in the current sequence.
// once the current sequence has all elements, we record it as one valid permutation.
// this is a classic backtracking problem because we:
/// - make a choice (pick an element)
/// - explore further recursively (continue building)
/// - undo the choice (backtrack) to explore other possibilities.
//
// in short, we try every possible element at every position until all permutations are explored.

// approach
// create an empty result array 'res' to store all permutations.
// define a recursive helper function 'backtrack(path)' where 'path' represents the current partial permutation.
// base case: if path.length === nums.length, push a copy of path into res and return.
// loop through each number in nums:
//   - if the number is not already in the path, add it (choose step)
//   - recursively call backtrack(path)
//   - remove the number after recursion (backtrack step)
// start recursion with an empty path: backtrack([])
// finally, return res as the list of all permutations.

var permute = function (nums) {
  const res = []

  function backtrack(path) {
    // base case, will help us to fill the res
    // if path has all numbers, store a copy
    // always make a copy, do not push reference
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    // trying other numbers which are not already in path
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (!path.includes(num)) {
        path.push(num)
        backtrack(path)
        path.pop()
        // alway push first, then call recursion backtrack and then pop while backtracking
      }
    }
  }

  backtrack([])
  return res
}

// time complexity: o(n × n!), n! permutations, each takes o(n) to build
// space complexity: o(n), recursion stack and path storage
