// 216. Combination Sum III
// https://leetcode.com/problems/combination-sum-iii/

// find all valid combinations of k numbers that sum up to n such that the following conditions are true:
// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// examples
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.

// intuition
// pick exactly k distinct numbers from 1..9 that sum to n.
// use backtracking to build combinations in increasing order so each number is used at most once.
// prune branches when sum exceeds n or not enough numbers remain to reach k.

// approach
// define backtrack(start, path, sumSoFar):
//   - if path.length === k and sumSoFar === n: record path copy
//   - if path.length === k or sumSoFar >= n: return (either full length or sum already too large)
//   - for i from start to 9:
//       - if sumSoFar + i > n: break (further i will be larger so also exceed)
//       - if path.length + (9 - i + 1) < k: break (not enough numbers left to reach k)
//       - choose i (push), recurse with start = i + 1, then pop

var combinationSum3 = function (k, n) {
  const res = []

  function backtrack(start, path, sumSoFar) {
    if (path.length === k && sumSoFar === n) {
      res.push([...path])
      return
    }

    for (let i = start; i <= 9; i++) {
      // if i makes sum exceed target, break because further i will be larger
      if (sumSoFar + i > n) break

      // if not enough numbers left to fill k slots, break
      const numbersLeft = 9 - i + 1
      if (path.length + numbersLeft < k) break
      path.push(i)
      backtrack(i + 1, path, sumSoFar + i)
      path.pop()
    }
  }

  backtrack(1, [], 0)
  return res
}

// time: O(C(9, k) × k)
// Number of combinations to explore: 
//  - there are at most C(9, k) possible unique combinations (that’s “9 choose k”).
// for each valid path we:
//  - perform up to k recursive calls,
//  - and when we find a valid one, we copy it (cost O(k)).
// so the total work ≈
// - O(C(9, k) × k)
// since 9 is constant, the absolute upper bound is small — but asymptotically, that’s the expression.
// Pruning impact
//  - pruning (if sumSoFar + i > n → break) stops many branches early, but in Big-O we still consider the upper bound — so we keep O(C(9, k) × k) as final.

// space: O(C(9, k) × k)
// Recursion depth:
//  - we can go at most k levels deep in the recursion tree → O(k) stack space.
// Temporary path storage:
//  - path array at each recursion also uses up to O(k).
// Result storage:
//  - there can be up to C(9, k) valid combinations, each of size k, so O(C(9, k) × k) space for the output.

// Or, can also say space is O(k) excluding output storage.