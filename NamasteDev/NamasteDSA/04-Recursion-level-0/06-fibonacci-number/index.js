// write a function to find the nth fibonacci number using recursion
// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// What is Fibonacci Number?
// => A series of numbers in which each number is the sum of the two preceding numbers.

//& discuss => https://leetcode.com/problems/fibonacci-number/solutions/

//F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1

// Input: n = 3
// Output: 2
//Explanation: F(3) = F(2) + F(1) = 2 + 1 = 3

// Input: n = 5
// Output: 5
//Explanation: F(5) = F(4) + F(3) = 3 + 2 = 5

//* Solution 1
var fib = (n) => {
  const arr = [0,1]

  for (let i = 2; i <= n; i++) {
      arr.push(arr[i-1] + arr[i-2])
  }
  console.log(arr[n])
}

fib(5)

//* solution 2 (RECURSION)

const fibN = (n) => {
  if (n <=1) return n 

  return fibN(n-1) + fibN(n-2)
}

console.log(fibN(3));

//* one-Liner

const fibF = (n) => n <= 1 ? n : fibF(n-1) + fibF(n-2);

console.log(fibF(3));
