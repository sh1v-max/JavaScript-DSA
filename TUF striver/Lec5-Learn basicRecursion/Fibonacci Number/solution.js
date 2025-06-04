class Solution {
    fib(n) {
        //your code goes here
        if (n === 0) {
            return 0
        }
        if (n === 1) {
            return 1
        }
        return this.fib(n - 1) + this.fib(n - 2)
    }
}

// const solution = new Solution();
// const n = 5
// console.log(`Fibonacci number at position ${n} is ${solution.fibonacci(n)}`);