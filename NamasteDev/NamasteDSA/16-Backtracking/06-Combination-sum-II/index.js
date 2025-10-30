// 40. Combination sum II
// https://leetcode.com/problems/combination-sum-ii/

// given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sum to target
// each number in candidates may only be used once in the combination

// example:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

// full tree for explanation:

//                  target
//                /        \
//          candidates[0]    candidates[1]
//            /                 \
//    candidates[0] - value      candidates[1] - value
//        /                         \
//   candidates[2] - value   ...   candidates[n-1] - value
//    /                                 \
//candidates[2] - value + ... + candidates[n-1] - value

// explanation:
// we will use backtracking to explore all possible combinations
// sort the candidates to handle duplicates easily
// use a recursive function to build combinations
// skip duplicates by checking if the current candidate is the same as the previous one
// add the current candidate to the path and recurse with updated target and index

// intuition
// similar to combination sum I, we need to find all unique combinations that sum up to a target
// the difference is that each number in candidates[] can be used only once in a combination,
// and the array may contain duplicate elements
// this means if the input contains repeated numbers (like [10,1,2,7,6,1,5]),
// we must ensure that no duplicate combinations are generated in the result
// to handle duplicates correctly, we must sort the input array first
// sorting groups identical elements together, which allows us to easily skip over duplicates
// during recursion (on the same level of the tree)
// as before, we use backtracking — we explore all possible subsets by choosing or skipping each number,
// but this time, each candidate can be used only once per combination (so we move to i + 1)

// approach
// sort the candidates array to make duplicates adjacent
// define a recursive helper function backtrack(start, path, target):
//   - if target === 0, push a copy of path into res and return
//   - if target < 0, return (sum exceeded target)
//   - loop through i = start to candidates.length:
//       - if i > start and candidates[i] === candidates[i - 1], skip this iteration
//         (to avoid generating the same combination again on the same recursion level)
//       - add candidates[i] to path
//       - recursively call backtrack(i + 1, path, target - candidates[i])
//         (move to i + 1 because each number can be used only once)
//       - remove the last element (backtrack step)
// call backtrack(0, [], target) to start exploration
// return res as the final list of unique combinations

function combinationSum2(candidates, target) {
  const res = []
  candidates.sort((a, b) => a - b)

  function backtrack(start, path, remSum){
    // forming the res
    if(remSum === 0){
      res.push([...path])
      return
    }
    // make sure we're pruning the branches
    if(remSum < 0) return

    for( let i = start; i < candidates.length; i++){
      // skip duplicates by checking if the current candidate is the same as the previous one
      // we only need to check for duplicates if we're not at the start of the array
      if(i > start && candidates[i] === candidates[i - 1]) continue

      path.push(candidates[i])
      backtrack(i+1, path, remSum - candidates[i])
      // start is i+1, because we need to choose only elem in right hand side
      path.pop()
    }
  }
  backtrack(0, [], target)
  return res
}


console.log("Dry run:")
let candidates = [10,1,2,7,6,1,5]
let target = 8
console.log(combinationSum2(candidates, target)) // [[1,1,6],[1,2,5],[1,7],[2,6]]

// time complexity: O(2^n) - in the worst case, we may explore all subsets
// each element can be either chosen or skipped (but pruning and duplicate skipping reduce actual calls)

// space complexity: O(n) - recursion stack for depth and path storage