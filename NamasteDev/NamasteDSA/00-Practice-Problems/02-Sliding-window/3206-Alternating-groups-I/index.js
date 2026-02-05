// 3206. Alternating Groups I
// https://leetcode.com/problems/alternating-groups/

// intuition (brute force):
// since it's a circular array, we need to consider the left and right tiles of each index
// we can calculate the left tile index as (i - 1) % n and the right tile index as (i + 1) % n
// then we can check if the tile at index i is different from the left or right tile
// maintain and return the count

// (sliding window):
// we can use a sliding window to check if the tile at index i is different from the left or right tile
// we slide the window of size 3 around the circle n times
// for each window [a, b, c], only the middle element matters
// use modulo operator to handle circular indexing
// if b != a and b != c, it forms an alternating group

// approach (sliding window):
// let n be the length of the colors array
// initialize a count to store the number of alternating groups
// for each index i from 0 to n - 1:
// - treat i, i+1, and i+2 as a window of size 3
// - use modulo (%) to handle circular indexing
// check if the middle element is different from both neighbors
// if yes, increment the count
// return the count

var numberOfAlternatingGroups = function (colors) {
  const n = colors.length
  let count = 0

  for (let i = 0; i < n; i++) {
    let left = colors[i]
    let mid = colors[(i + 1) % n]
    let right = colors[(i + 2) % n]

    if (mid !== left && mid !== right) {
      count++
    }
  }

  return count
}

// time complexity: O(n)
// space complexity: O(1)