// evaluate reverse polish notation
// leetcode question: 150. Evaluate Reverse Polish Notation

// Polish notation is a mathematical notation in which operators precede their arguments.
// It is also known as prefix notation.
// For example, the expression "2 + 3" would be written in Polish notation as "+ 2 3".
// This notation is used in some programming languages such as Lisp and Racket.
// so reverse polish notation would be "2 3 +"

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// approach:
// use a stack to store numbers and operators
// iterate through all
// if it's a number, push it onto the stack
// if it's is an operator, pop two numbers from the stack and perform the operation
// push the result onto the stack
// return the top of the stack as the result

function evalRpn(tokens) {
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
          // getting last 2 elements
          let a = stack.pop()
          let b = stack.pop()

          let res
          if (tokens[i] === '+') res = b + a
          else if (tokens[i] === '-') res = b - a
          else if (tokens[i] === '*') res = b * a
          else if (tokens[i] === '/') res = Math.trunc(b / a)

          // pushing the res back
          stack.push(res)
      } else {
          // when it's num, convert it into number, originally a string
          stack.push(Number(tokens[i]))
      }
  }

  // pop the res, last element ud be the result
  return stack.pop()
}

// diff approach
function evalRpn(tokens) {
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
          let a = stack.pop()
          let b = stack.pop()
          // We use string interpolation to create an expression string
          // that can be evaluated as a JavaScript expression.
          // This is a bit hacky, but it's easier than implementing a
          // custom parser for the simple expressions we're dealing with.
          let res = eval(`${b} ${tokens[i]} ${a}`)
          stack.push(Math.trunc(res))
      } else {
          stack.push(Number(tokens[i]));

      }
  }
  return stack.pop()
}


// time complexity: O(n)
// space complexity: O(n)