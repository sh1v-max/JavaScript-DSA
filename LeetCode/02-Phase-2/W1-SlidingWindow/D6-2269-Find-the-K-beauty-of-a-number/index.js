// 2269. Find the K-Beauty of a Number
// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

// intuition:
// we need substring of length k
// since substring means contiguous, this is a fixed-size sliding window problem
// convert num to string
// for each window of length k:
//   convert substring to integer
//   if value != 0 and num % value === 0
//     increment count
// return count

// approach:
// convert num to string
// initialize count = 0
// for i from 0 to str.length - k:
//   extract substring(i, i+k)
//   convert to number
//   if number != 0 and divides num
//     increment count
// return count

var divisorSubstrings = function (num, k) {
  const str = num.toString()
  let count = 0

  for (let i = 0; i <= str.length - k; i++) {
    const sub = str.substring(i, i + k)
    const val = Number(sub)

    if (val !== 0 && num % val === 0) {
      count++
    }
  }

  return count
}


// time complexity: O(n)
// space complexity: O(1)