// 1963. Minimum Number of Swaps to Make the String Balanced
// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/

// intuition:
// a string becomes invalid only when a closing bracket appears before an opening bracket
// so, we will keep counting both opening and closing
// and when we see count of ']' > count of '['
// we fix it
// now, how to fix it?
// we will swap ']' with '[' that appears later
// to avoid breaking already correct parts of the string, we should:
// swap with the closest opening bracket from the right
// that's where we use two-pointers approach, i and j
// i moves left to right, checking the string
// j moves right to left, searching for '[' when needed

// approach:
// convert string into array
// initialize left, right pointers and other variables:
// i = 0, j = n - 1
// open = 0, to count '[' seen
// close = 0 to count ']' seen
// swap = 0
// traverse the string using i
// if arr[i] == '[', open++
// else close++
// if at any point, close > open
// move j left until arr[j] = '['
// swap arr[i], and arr[j]
// swap++
// fix counts after swap
// open++ (we brought '[' here)
// close-- (removed extra ']')
// j-- (move j left)
// return swaps

var minSwaps = function (s) {
  let arr = s.split('')
  let i = 0,
    j = arr.length - 1
  let open = (close = swaps = 0)

  while (i < j) {
    if (arr[i] === '[') {
      open++
    } else {
      close++
    }

    if (close > open) {
      // find open bracket from right
      while (arr[j] !== '[') {
        j--
      }

      // swap
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      swaps++

      // fix counts after swaps
      open++
      close--
      j--
    }

    i++
  }

  return swaps
}

// time complexity: O(n)
// space complexity: O(n)
