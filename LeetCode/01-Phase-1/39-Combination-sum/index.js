// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/

// given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:
// Input: candidates = [2], target = 1
// Output: []

// intuition
// we are asked to find all unique combinations of numbers that sum up to a given target.
// we can use each number multiple times, and order does not matter —
// meaning [2,3,2] and [3,2,2] are considered the same combination.
// this is a classic backtracking problem because at each step, we choose a candidate,
// explore further by reducing the target, and backtrack when we exceed it.
// at every position, we have two options:
//   - include the current number (and continue with the same index since repetition is allowed)
//   - skip the current number (and move to the next index)
// we explore all valid combinations recursively until the target becomes 0 (a valid combination)
// or negative (invalid path).

// approach
// create a result array 'res' to store all valid combinations.
// define a recursive helper function backtrack(start, path, target):
//   - if target === 0, push a copy of path into res (found a valid combination) and return
//   - if target < 0, return (sum exceeded target)
//   - loop from i = start to candidates.length:
//       - add candidates[i] to path
//       - call backtrack(i, path, target - candidates[i]) // same index since we can reuse the number
//       - remove last element from path (backtrack step)
// start recursion with backtrack(0, [], target)
// return res at the end.

var combinationSum = function (candidates, target) {
    const res = []

    function backtrack(start, path, remainingSum) {
        if (remainingSum === 0) {
            res.push([...path])
            return
        }

        if (remainingSum < 0) return

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            backtrack(i, path, remainingSum - candidates[i])
            path.pop()
        }
    }

    backtrack(0, [], target)
    return res
};

// time complexity: O(2^(t/m + m)) where t is the target and m is the minimum value in candidates

// The complexity mainly depends on:
// how many combinations can be formed, and
// how deep the recursion goes.
// Each recursive call tries every candidate starting from start, and numbers can be reused, so this is not a strict 2^n type tree (like subsets). Instead, it’s exponential in nature, bounded by the growth of valid combinations
// Let:
// T = target value
// m = smallest candidate number
// Then, in the worst case, the recursion depth could go up to T / m (if we keep picking the smallest number).
// At each step, we loop through up to n candidates.
// So roughly: O(n^(T/m))

// space complexity: O(t/m) for the recursion stack and path storage
// Recursion stack depth → at most T / m (worst case)
// Path list (path) → can hold up to T / m elements
// Result (res) → stores all valid combinations (output space, not counted in auxiliary space)
// So auxiliary space (excluding output) is: O(t/m)