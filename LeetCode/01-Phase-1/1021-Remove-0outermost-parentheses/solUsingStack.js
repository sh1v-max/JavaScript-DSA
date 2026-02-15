/**
 * @param {string} s
 * @return {string}
 */

// Approach: Using a Stack
// We'll use a stack to track the parentheses and know when we're inside
// or outside a primitive block.
// For each character in the string `s`:
// If it's "(", and the stack is NOT empty, we add it to the result.
//Because if stack is empty, this "(" is the start of a new primitive, so skip it.)
//Push "(" to the stack.
//If it's ")", pop from the stack (one "(" closed).
//If the stack is NOT empty after popping, add ")" to the result.
//(Because if stack is empty, this ")" was the outermost closing bracket.)
// 3. Return the final result
 
var removeOuterParentheses = function (s) {
  let stack = []
  let res = ""

  // we will store all parentheses but the outermost one
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
          // if it's not empty, it's not outermost
          if (stack.length > 0) {
              res = res + s[i]
          }
          stack.push(s[i])
          // else will run when s[i] === ")"
      } else {
          stack.pop()
          if (stack.length > 0) {
              res = res + s[i]
          }
      }
  }
  return res
};

// time complexity: O(n)
// space complexity: O(n) because of stack