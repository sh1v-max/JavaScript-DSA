// 2149. Rearrange array elements by sign
// https://leetcode.com/problems/rearrange-arrau-elements-by-sigh/

// my intuition:
// this problem requires alternate sign while preserving the order of the number with the same sign
// since we must preserve the order, i'm not sure if we can swap elements in-place
// we will use separate positive and negative numbers first to preserve the order
// once separated, we will merge both alternately to get the final array

// approach:
// traverse the array and store
// all positive num in one array, and all negative in another
// let res = []
// iterate through both and add one positive element followed by one negative
// return res

var rearrangeArray = function (nums) {
  const pos = []
  const neg = []
  const res = []

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num > 0) {
      pos.push(num)
    } else {
      neg.push(num)
    }
  }

  for (let i = 0; i < pos.length; i++) {
    res.push(pos[i])
    res.push(neg[i])
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)
