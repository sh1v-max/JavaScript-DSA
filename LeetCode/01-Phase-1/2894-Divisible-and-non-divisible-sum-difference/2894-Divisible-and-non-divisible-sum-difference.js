/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let sum1 = 0
  let sum2 = 0

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      sum2 += i
    } else {
      sum1 += i
    }
  }

  return sum1 - sum2
}
