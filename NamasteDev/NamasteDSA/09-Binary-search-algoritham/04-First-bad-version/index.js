// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/

// This problem finds the first bad version in a sequence of versions from 1 to n. We have an API isBadVersion(version) that returns whether a version is bad. We use binary search to pinpoint the first bad version.


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

var isBadVersion = function(isBadVersion) {
  return function (n) {
    let l = 1
    let r = n
    while (l < r) {
      let m = l + Math.floor((r - l) /2)
      if(isBadVersion(m)){
        // will do r = m
        r = m
      }
      else { 
        l = m + 1
      }
    }
    // always shifting r to the bad one, so r will be the ans
    return r
  }
}

// time complexity: O(log n)
// space complexity: O(1)