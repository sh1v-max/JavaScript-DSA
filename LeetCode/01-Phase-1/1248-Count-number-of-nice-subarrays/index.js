// 1248. Count Number of Nice Subarrays
// https://leetcode.com/problems/count-number-of-nice-subarrays/

// intuition:
// we need to count subarrays that contains exactly k odd numbers
// counting "exactly k" directly using sliding window is tricky
// because sliding window naturally works for "at most k"
// so we use a mathematical trick:
// exactly k = atMost(k) - atMost(k - 1)
// why this works:
// atMost(k) counts subarrays with:
// 0 odds, 1 odd, 2 odds, ..., k odds
// atMost(k - 1) counts subarrays with:
// 0 odds, 1 odd, 2 odds, ..., k-1 odds
// when we subtract them,
// everything with fewer than k odds cancels out
// leaving only subarrays with exactly k odds
// now, to compute atMost(k):
// we use sliding window
// maintain two pointers (left, right)
// expand right pointer
// if we see an odd number, decrease k
// if k becomes negative, it means we have more than allowed odds
// so we shrink from left until window becomes valid again
// at each valid window,
// number of valid subarrays ending at 'right' is:
// (right - left + 1)
// because every subarray starting between left and right is valid
// we accumulate this count and return it
// final answer:
// countAtMost(k) - countAtMost(k - 1)

// approach:
// create a helper function countAtMost(k)
// this function returns number of subarrays
// that contain at most k odd numbers.
// inside countAtMost(k):
// - initialize left = 0
// - initialize result = 0
// iterate right from 0 to nums.length - 1
// for each nums[right]:
// - if it is odd, decrease k
// if k becomes negative (means more than allowed odds):
// - move left pointer forward
// - if nums[left] was odd, increase k
// - continue shrinking until k >= 0
// when window becomes valid (k >= 0):
// - add (right - left + 1) to result
// - because all subarrays ending at right
//   and starting between left and right are valid
// return result from countAtMost
// final result:
// return countAtMost(k) - countAtMost(k - 1)


var numberOfSubarrays = function (nums, k) {
  function countAtMost(k) {
    let left = 0
    let result = 0

    for (let right = 0; right < nums.length; right++) {
      // if current num is odd
      if (nums[right] % 2 === 1) {
        k--
      }

      // if window has more than allowed odds
      while (k < 0) {
        if (nums[left] % 2 === 1) {
          k++
        }
        left++
      }

      // add number of valid subarrays ending at right
      result += right - left + 1
    }

    return result
  }

  return countAtMost(k) - countAtMost(k - 1)
}

// time complexity: O(n)
// space complexity: O(1)
