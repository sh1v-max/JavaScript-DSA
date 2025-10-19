// 90. Subset II
// https://leetcode.com/problems/subset-ii/

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