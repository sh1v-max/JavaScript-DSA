// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', ‘[' and ']',
// determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order
// Every close bracket has a corresponding open bracket of the same type.

// Intuition
// The key idea is:
// Every opening bracket must have a matching closing bracket in the correct order.
// The last opened bracket must be closed first → this is a LIFO problem, which screams stack.

// Approach (Using One Stack)
// Keep track of the opening brackets in a stack.
// When a closing bracket is found, check if it matches the top of the stack.
// If it does, pop the top; if not, return false.
// At the end, if the stack is empty, return true; else false.

function isValid(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else {
      if (stack.length === 0) return false

      let top = stack.pop()

      if (
        (s[i] === ')' && top !== '(') ||
        (s[i] === '}' && top !== '{') ||
        (s[i] === ']' && top !== '[')
      ) {
        return false
      }
    }
  }
  return stack.length === 0
}

// optimized approach
function isValid(s) {
  let stack = []
  let map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      // Opening bracket
      stack.push(s[i])
    } else {
      // Closing bracket
      let top = stack.pop()
      if (!top || map[top] !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0
}

// time: O(n)
// space: O(n)
