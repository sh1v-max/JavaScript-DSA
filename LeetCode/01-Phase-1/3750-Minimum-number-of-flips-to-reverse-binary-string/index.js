// 3750. Minimum number of flips to reverse binary string
// https://www.codingninjas.com/studio/problems/minimum-number-of-flips-to-reverse-binary-string_3750463?leftPanelTab=0

// intuition:
// to make the binary string equal to its reverse, each character
// at index i must match the character at index i in the reversed string
// since we can flip individual bits, every mismatch can be fixed
// independently with exactly one flip

// approach:
// convert n to its binary string representation
// create the reversed version of this string
// iterate through both strings index by index
// count how many positions have different characters
// return flips

var minimumFlips = function (n) {
  let s = n.toString(2)
  // to convert into binary
  let rev = s.split('').reverse().join('')
  let flips = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== rev[i]) {
      flips++
    }
  }

  return flips
}

// time complexity: O(n)
// space complexity: O(n)
