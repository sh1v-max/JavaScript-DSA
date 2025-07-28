// Approach: Using a Depth Counter
// Instead of a stack, we track how "deep" we are in parentheses using a counter.
// For each character in the string `s`:
// 1. If it's "(", we only add it to the result if depth > 0 (not outermost).
//    Then we increase the depth counter.
// 2. If it's ")", we decrease the depth counter first.
//    Then we only add it if depth > 0 (not outermost).
// This way, we skip the first "(" and the last ")" of every primitive substring.
// Finally, return the result.

var removeOuterParentheses = function (s) {
  let res = ''
  let depth = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (depth > 0) {
        res = res + s[i]
      }
      depth++
    } else {
      depth--
      if (depth > 0) {
        res = res + s[i]
      }
    }
  }
  return res
}

// time complexity: O(n)
// space complexity: O(1)