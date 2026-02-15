// 169. Majority Element
// https://leetcode.com/problems/majority-element/

// given an array nums of size n, return the majority element

// the majority element is the element that appears more than ⌊n / 2⌋ times
// you may assume that the majority element always exists in the array

// example 1:
// Input: nums = [3,2,3]
// Output: 3

// example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// approach: hash map
// intuition:
// to find the majority element, we can use a hash map and create a frequency count of each element in the array
// since the majority element appears more than n/2 times, it will be the only element
// that meets this condition

var majorityElement = function (nums) {
  const map = {}
  const maxCount = Math.floor(nums.length / 2)

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (!map[num]) {
      map[num] = 1
    } else {
      map[num] += 1
    }
    if (map[num] > maxCount) return num
  }
}

// time complexity: O(n)
// space complexity: O(n)

// optimized approach: boyer-moore voting algorithm
// intuition:
// the boyer-moore voting algorithm is an efficient way to find the majority element in an array
// it works by keeping track of two variables:
// a candidate and a count
// every time we see the same number again, add 1 to count
// every time we see a different number, subtract 1 from count
// when count reaches 0, we change the candidate to the current number and reset count to 1
// since the majority element appears more than n/2 times, it will always be the candidate at the end

var majorityElement = function (nums) {
  let count = 0
  let candidate = null
  for (let num of nums) {
    if (count === 0) {
      candidate = num
    }
    if (num === candidate) {
      count++
    } else {
      count--
    }
  }
  return candidate
}

// time complexity: O(n)
// space complexity: O(1)