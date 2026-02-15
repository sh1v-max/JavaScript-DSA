/**
 * @param {string} s
 * @return {boolean}
 */

// approach (using One stack)
// keep track of the opening brackets in a stack
// when a closing bracket is found, check if it matches the top of the stack
// if it does, pop the top; if not, return false
// at the end, if the stack is empty, return true, else false
// optimised using map

var isValid = function (s) {
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
};