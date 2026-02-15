// 77. Combinations
// https://leetcode.com/problems/combinations/

// intuition
// we need all possible ways to choose 'k' numbers from the range [1...n].
// this is a perfect case for backtracking — we build combinations step by step.
// think of it as exploring a decision tree:
// - at each step, we can choose a number or skip it.
// - once we have 'k' numbers chosen, we record that combination.
// - then we backtrack to explore other possible paths.
// backtracking helps us systematically explore all valid combinations
// without repetition or extra computation.

// approach
// use a helper recursive function 'backtrack(start, path)'.
//  - 'start' represents the current number we’re choosing from.
//  - 'path' holds the current partial combination.
// if path.length === k → we’ve found one valid combination, so push a copy to result.
// otherwise, iterate i from 'start' to 'n':
//    - add i to path (choose it).
//    - recursively call backtrack(i + 1, path) → move forward.
//    - remove i from path (undo / backtrack step).
// begin recursion with start = 1 and empty path [].
// return the result array once all combinations are explored.

var combine = function (n, k) {
  const res = []

  // recursive helper to build combinations
  function backtrack(start, path) {
    // base case: if path has k numbers, push it into result
    if (path.length === k) {
      res.push([...path])
      // make a copy before pushing
      return
    }

    // explore all possible next numbers
    for (let i = start; i <= n; i++) {
      path.push(i)
      backtrack(i + 1, path)
      // explore further
      path.pop()
      // backtrack (undo the choice)
    }
  }

  // start recursion from 1 with an empty combination
  backtrack(1, [])

  // return all generated combinations
  return res
}

console.log(combine(4, 2))
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

// time:  O(C(n, k) × k) → each combination takes O(k) to copy into result
// space: O(k) for recursion stack (depth = k)