// a function to calculate sum elements of array using recursion

let arr = [5, 4, 3, 2, 1]

function sum(n) {
  if (n == 0) {
    return arr[n]
  }
  return arr[n] + sum(n - 1)
}

console.log(sum(arr.length - 1))
