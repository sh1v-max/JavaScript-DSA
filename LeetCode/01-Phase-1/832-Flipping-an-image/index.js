// 8332. Flipping an Image
// https://leetcode.com/problems/flipping-an-image/

// my intuition:
// each row must be reversed
// after reversing, each bit must be inverted
// use two pointers to reverse a tow, and xor operator (^1) to invert the row
// we can do both in one pass, avoids extra loop

// approach: two pointer
// initialize two pointers, left and right
// while left <= right
// swap row[left] and row[right]
// invert both using xor operator (^1)
// move pointers, and return the resultant image

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let row = image[i]
    let left = 0
    let right = row.length - 1

    while (left <= right) {
      // swapping and inverting on the go
      let temp = row[left] ^ 1
      row[left] = row[right] ^ 1
      row[right] = temp

      left++
      right--
    }
  }
  return image
}

// time complexity: O(n^2)
// space complexity: O(1)
