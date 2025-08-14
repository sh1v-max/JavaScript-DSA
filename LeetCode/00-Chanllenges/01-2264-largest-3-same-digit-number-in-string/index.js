// 2264. largest-3-same-digit-number-in-string
// https://leetcode.com/problems/largest-3-same-digit-number-in-string/

// given a string num that represents a large integer, return the largest 3-digit integer that can be formed with the same digit, or -1 if it does not exist
// example 1:
// input: num = "6777133339"
// output: 999
// output: because 999 is the largest 3-digit number that can be formed with the same digit 9.

// intuition:
// all 3 char are the same, so we can apply sliding window to find the 3-digit number
// and then we can compare the 3-digit numbers to find the largest one

// approach:
// loop from i = 0 to i < num.length - 2
// take sub string from i to i + 3
// if all 3 char are same, it's good integer
// keep track of the largest integer found
// return the largest integer found

function largestGoodInteger(num) {
  let good = ''

  for (let i = 0; i <= num.length - 3; i++) {
    let sub = num.slice(i, i + 3)
    if (sub[0] === sub[1] && sub[1] === sub[2]) {
      if (sub > good) {
        good = sub
      }
    }
  }

  return good
}

// time complexity: O(n)
// space complexity: O(1)