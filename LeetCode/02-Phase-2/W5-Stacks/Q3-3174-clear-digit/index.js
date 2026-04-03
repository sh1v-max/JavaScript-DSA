// 3174-Clear-Digits
// https://leetcode.com/problems/clear-digits/

// intuition:
// when we see a digit, we remove it and the closest non-digit on its left
// stack helps track characters from left
// when digit comes, remove last character from stack

// approach:
// create an empty stack
// iterate through string:
// - if character is letter, push to stack
// - if character is digit, pop from stack
// at the end, join stack to form result string

var clearDigits = function (s) {
  let stack = []

  for (let char of s) {
    if (char >= '0' && char <= '9') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  // don't forget to join, stack rn is "a,b,c"
  return stack.join('')
}

// time complexity: O(n)
// space complexity: O(n)
