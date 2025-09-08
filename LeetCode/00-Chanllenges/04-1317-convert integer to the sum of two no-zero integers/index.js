// using helper function

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  let res = []
  for (let i = 0; i < n / 2 + 1; i++) {
    let j = n - i
    if (isNoZero(i) && isNoZero(j)) {
      res.push(i)
      res.push(j)
      return res
    }
  }
}

function isNoZero(num) {
  return !num.toString().includes('0')
}

// Total time complexity:
// For each iteration, you check i and j → 2 × O(log n)
// Loop runs O(n) times
// Time: O(n * log n)
// Space complexity:
// Each conversion creates a string of length ~log n → O(log n) extra space per call
// Total space: O(log n) (ignoring output array)


// without helper function

var getNoZeroIntegers = function (n) {
  for (let i = 1; i < n; i++) {
    let j = n - i

    let tempI = i,
      tempJ = j
    let hasZero = false

    // to check 0 in i
    while (tempI > 0) {
      if (tempI % 10 === 0) {
        hasZero = true
        break
      }
      tempI = Math.floor(tempI / 10)
    }

    // to check 0 in j
    while (!hasZero && tempJ > 0) {
      if (tempJ % 10 === 0) {
        hasZero = true
        break
      }
      tempJ = Math.floor(tempJ / 10)
    }
    if (!hasZero) {
      return [i, j]
    }
  }
}

// Digit checking:
// Each number has ~log n digits
// Checking all digits takes O(log n) for i and O(log n) for j
// So O(log n) per iteration
// Total time complexity: O(n * log n) — same as string method
// Space complexity:
// Only uses a few integer variables (tempI, tempJ, hasZero)
// No extra arrays/strings per iteration → O(1) extra space