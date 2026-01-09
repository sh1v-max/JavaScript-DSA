// 3794. Reverse string prefix
// https://leetcode.com/problems/reverse-string-prefix/

// intuition:
// Convert string, array (because JS strings are immutable)
// Set: left = 0, right = k - 1
// While left < right
//  swap arr[left] and arr[right]
//  left++, right--
// Join array into string

var reversePrefix = function (s, k) {
  // we will use two pointers, i and k
  // iterate over i = 0 to k-1 elements
  // i++, k-- till i>=k
  // swap char at i and k, then add the rest
  let arr = s.split('')
  let left = 0
  let right = k - 1
  console.log(arr)
  while (left < right) {
    // swap, move pointers
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
  return arr.join('')
}

// time complexity: O(n)
// space complexity: O(n)