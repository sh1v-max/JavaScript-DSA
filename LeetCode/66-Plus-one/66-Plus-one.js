// Start from the last digit (right-most)
// Add 1 to that digit
// If the digit becomes 10, make it 0 and carry 1 to the next left digit
// Repeat until no carry or array ends
// If you finish the whole array and still have a carry (like [9, 9] → 100), then unshift 1 at the beginning


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([4, 3, 2, 1]))

// time complexity: O(n)
// space complexity: O(1)

// brute force
var plusOne = function(digits) {
  let num = BigInt(digits.join(''));
  num += 1n;
  return num.toString().split('').map(Number);
};

console.log(plusOne([4, 3, 2, 1]))

// time complexity: O(n)
// space complexity: O(n)