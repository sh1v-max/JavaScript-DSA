// write a function to find the nth fibonacci number using recursion

function fib (n){
  if (n == 0) return 0
  if (n == 1) return 1
  // if (n <= 1) return n
  // this is same as above
  return fib(n - 1) + fib(n - 2)
}