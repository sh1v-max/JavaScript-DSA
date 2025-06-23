// a function to calculate sum of first n natural number
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

console.log(sum(5));