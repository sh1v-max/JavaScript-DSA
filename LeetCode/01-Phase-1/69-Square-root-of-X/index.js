// Square root of X
// find the floor val of the square root of a non-negative integer x
// You cannot use built-in square root functions. The goal is to use
// binary search to compute the answer efficiently

// approach 2: brute force, linear search
// iterate over all possible vals of the square root
// if the square of the current val is equal to x, return it
// if the square of the current val is greater than x, return the previous val

function squareRoot(x) {
  let i = 0
  while (i * i <= x) {
    if (i * i === x) {
      return i
    }
    i++
  }
  return i - 1
}

// time complexity: O(n)
// space complexity: O(1)

// approach: binary search
// for  x = 0/1, return x
// now binary search, range: l = 2, r = floor(x / 2)
// find the greatest number m such that m * m ≤ x
// if m * m === x, return m
// if m * m > x, search left
// if m * m < x, search right
// return r as the floor square root


function squareRoot(x) {
  if (x < 2) return x

  let l = 2
  let r = Math.floor(x / 2)

  while (l <= r) {
    let m = l +  Math.floor((r - l) / 2)

    if (m * m === x) {
      return m
    } else if (m * m > x) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  return r
}

// time complexity: O(log n)
// space complexity: O(1)