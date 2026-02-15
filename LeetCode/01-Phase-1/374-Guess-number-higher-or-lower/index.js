// This problem uses binary search to find a hidden number between 1 and n
// using a feedback API guess(num), which tells us whether our guess is
// too high, too low, or correct

// approach: using binary search
// start by two pointers, l = 1 and r = n
// use binary search to guess the middle number m
// now, if calling guess(m) is:
// 0, then m is the ans
// -1, then m is smaller, move the left pointer to the right
// 1, then m is larger, move the right pointer to the left
// repeat this process until we find the correct answer

function guessNumber(n) {
  let l = 1
  let r = n
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (guess(m) === 0) {
      return m
    } else if (guess(m) === -1) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
}

// time complexity: O(log n)
// space complexity: O(1)