// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

// intuition:
// we are required to delete exactly one element
// and then find the longest subarray containing only 1's
// deleting one element is equivalent to allowing at most one 0 in the window
// because if the window contains 0 and the remaining elements will all be 1's
// so the problem becomes find the longest subarray containing at most one 0
// we use sliding window
// expand right pointer, count number of zeroes in window
// if zeros > 1, shrink window from left
// important:
// since we must delete one element
// the effective length of valid 1's becomes window size - 1
// because we can delete one element which can be either a 0 or a 1
// so we directly use right - left, instead of right - left + 1
// note:
// if the array contains all 1's, we can delete any one of them to get the longest subarray of 1's
// and right - left naturally handles that case as well

// approach:
// initialize left = 0, zeroCount = 0, maxLength = 0
// iterate right from 0 to n - 1
// if nums[right] == 0, increment zeroCount
// while zeroCount > 1:
// if nums[left] == 0, decrement zeroCount
// move left forward
// update maxLength with (right - left)
// return maxLength

var longestSubarray = function (nums) {
  let left = 0
  let zeroCount = 0
  let maxLength = 0

  for(let right = 0; right < nums.length; right++){
    if(nums[right] === 0){
      zeroCount++
    }

    // if we have more than one zero, we need to shrink the window from left until we have at most one zero
    while(zeroCount > 1) {
      if(nums[left] === 0){
        zeroCount--
      }
      left++
    }

    maxLength = Math.max(maxLength, right - left)
    // this also handles the case with all 1's
  }

  return maxLength
}

// time complexity: O(n)
// space complexity: O(1)