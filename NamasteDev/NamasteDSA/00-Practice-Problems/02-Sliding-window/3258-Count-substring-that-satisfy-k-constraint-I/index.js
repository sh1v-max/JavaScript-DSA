// 3258. Count Substring that satisfy k constrains I
// https://leetcode.com/problems/count-substring-that-satisfy-k-constraints-i/

// thinking process:
// we need to count substrings which satisfies conditions
// no of 0 <= k
// no of 1 <= k
// it's invalid if no of 0/1 > k
// so instead of directly counting valid substring
// we will ensure our window never has both counts more than k
// that will require us to use sliding window approach

// intuition:
// use two pointers to maintain window, l and r
// track how many 0 and 1 are in current window
// expand the window by moving right
// if both counts become greater than k, the window is invalid
// all substrings starting from l to r are valid for every valid window ending at index 'r'
// add (r - l + 1) to the res

// approach:
// l = count1 = count2 = res = 0
// move r from 0 to n - 1
// update count0/count1 based on s[r]
// while count0 > k, and count1 > k:
//  shrink window by moving l
// update counts
// add (r - l + 1) to rest
// return res

var countKConstraintSubstrings = function (s, k) {
  let l = 0
  let count0 = 0
  let count1 = 0
  let res = 0

  for (let r = 0; r < s.length; r++) {
    if (s[r] === '0') {
      count0++
    } else {
      count1++
    }

    // shrink window if invalid
    while (count0 > k && count1 > k) {
      if (s[l] === '0') {
        count0--
      } else {
        count1--
      }
      l++
    }
    // all substring ending at r are valid
    res += r - l + 1
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)
