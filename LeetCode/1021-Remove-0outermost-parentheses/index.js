// A "valid parentheses string" is a string that is correctly balanced.
// Examples of valid parentheses strings: "", "()", "(())()", "(()(()))".
//
// A valid string is called "primitive" if:
//   - It is NOT empty.
//   - You cannot split it into two smaller valid parentheses strings.
//
// For example:
//   "(()())" is primitive (can't split it into smaller valid parts).
//   "()()" is NOT primitive (can split into "()" + "()").
//
// Any valid string can be broken down into smaller primitive parts.
// For example:
//   "(()())(())"  =>  "(()())" + "(())"
//
// What do we need to do?
// - For each primitive part, remove its OUTERMOST parentheses.
// - Join all the results together and return them.
//
// Example:
//   Input:  "(()())(())"
//   Steps:   "(()())" => "()()"
//            "(())"   => "()"
//   Output: "()()()"

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

function removeOuterParentheses(s) {
  let stack = []
  let res = ""

  // we will store all parentheses but the outermost one
  for(let i = 0; i < s.length; i++){
    if(s[i] === "("){
      // if it's not empty, it's not outermost
      if(stack.length > 0) {
        res = res + s[i]
      }
      stack.push(s[i])
      // else will run when s[i] === ")"
    } else {
      stack.pop()
      if(stack.length > 0) {
        res = res + s[i]
      }
    }
  }
  return res
}

// time complexity: O(n)
// space complexity: O(n) because of stack