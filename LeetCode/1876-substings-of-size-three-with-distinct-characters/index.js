// 1876. Substrings of Size Three with Distinct Characters
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// process:
// we need substrings of length exactly 3
// a substring is good if all it's char are diff
// since substrings must be contiguous and of fixed size
// we can use sliding window of size 3

// intuition:
// maintain a window of size 3, and slide it across the string
// at each step, check if the 3 chars in the window are all diff
// if yes, count it
// move the window to the right and repeat

// approach (sliding window):
// initialize a counter to store the number of good substrings
// iterate over the string from index 0 to length - 3
// for each index i, consider the substring s[i], s[i+1], s[i+2]
// check if all three char are diff
// if diff, increase the counter
// return the counter

var countGoodSubstrings = function (s) {
  let count = 0

  for (let i = 0; i <= s.length - 3; i++) {
    let a = s[i]
    let b = s[i + 1]
    let c = s[i + 2]

    if (a !== b && b !== c && a !== c) {
      count++
    }
  }

  return count
}

// time complexity: O(n)
// space complexity: O(1)
