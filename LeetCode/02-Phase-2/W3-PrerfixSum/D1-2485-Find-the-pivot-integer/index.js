// 2465. Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/

// intuition:
// we need to find an integer x such that
// sum of integers from 1 to x is equal to sum of integers from x + 1 to n
// sum(1 ... x) = sum(x ... n)
// let totalSum = sum(1 ... n)
// we know totalSum = n * (n + 1) / 2
// after simplifying the equation
// sum(1 ... x) = sum(x ... n)
// it reduces to: x² = totalSum
// so pivot exists only if totalSum is a perfect square
// and x = sqrt(totalSum)

// approach:
// compute totalSum using formula
// compute x = Math.sqrt(totalSum)
// if x is integer, return x
// otherwise, return -1

var pivotInteger = function (n) {
  let totalSum = (n * (n + 1)) / 2
  let x = Math.sqrt(totalSum)

  if (Number.isInteger(x)) {
    return x
  }

  return -1
}

// time complexity: O(1)
// space complexity: O(1)

// another approach: prefix sum
// intuition:
// we need to find an integer x such that:
// sum(1 ... x) = sum(x ... n)
// x is included in both sides
// instead of recomputing sums repeatedly,
// we use prefix sum thinking
// let totalSum = sum(1 ... n)
// we maintain a running leftSum = sum(1 ... current x)
// right side can be derived as:
// sum(x ... n)
// = totalSum - sum(1 ... x-1)
// = totalSum - (leftSum - x)
// for each x from 1 to n,
// we update leftSum and compute rightSum
// if leftSum === rightSum, we return x
// if no such x exists, return -1

// approach:
// compute totalSum using formula n * (n + 1) / 2
// initialize leftSum = 0
// loop x from 1 to n:
//   leftSum += x
//   rightSum = totalSum - (leftSum - x)
//   if leftSum === rightSum:
//       return x
// return -1

var pivotInteger = function (n) {
  let totalSum = (n * (n + 1)) / 2
  let leftSum = 0

  for (let x = 1; x <= n; x++) {
    leftSum += x

    let rightSum = totalSum - (leftSum - x)

    if (leftSum === rightSum) {
      return x
    }
  }

  return -1
}

// time complexity: O(n)
// space complexity: O(1)