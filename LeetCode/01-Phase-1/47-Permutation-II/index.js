// 47. Permutations II
// Medium
// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example 1:
// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

// Example 2:
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// intuition
// we’re given an array of numbers that may contain duplicates, and we need to
// find all unique permutations of these numbers.
// permutation problems naturally fit backtracking, since we:
//   - pick an element (choose),
//   - explore all possibilities (recurse),
//   - then undo that choice (backtrack) to try others.
// duplicates make it trickier — we must avoid generating identical permutations
// by skipping over repeated elements at the same recursion level.

// approach
// sort the array to bring duplicates together. (helps detect duplicates easily)
// define a recursive helper function backtrack(path, choices):
//   - if path.length === arr.length, we’ve formed a full permutation → push a copy to result
//   - otherwise, iterate over choices:
//        - skip duplicates using condition: if i > 0 && choices[i] === choices[i - 1], continue
//          (this avoids exploring duplicate branches at the same depth.)
//        - push current element into path (choose step).
//        - recursively call backtrack() with remaining elements (excluding chosen one)
//        - pop from path to undo and explore next choice (backtrack step)
// call backtrack([], arr) to start
// return the collected result list

var permuteUnique = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)
  // sort to handle duplicates

  let backtrack = (path, choices) => {
    // base case, when to stop recursion
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < choices.length; i++) {
      if (i > 0 && choices[i] === choices[i - 1]) continue

      path.push(choices[i])
      backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)])
      // whatever element we're choosing, we need to remove it from choices for the next recursion
      path.pop()
    }
  }

  backtrack([], nums)
  // path will be empty initially [], and choices will be the original array nums
  return res
}

// time complexity: O(n.n!) because there are n! permutations and generating each permutation takes O(n) time
// space complexity: O(n) for the recursion stack and path storage.
