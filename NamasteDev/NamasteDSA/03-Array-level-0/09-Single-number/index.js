// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

// Approach 1, brute force, using hash map
var singleNumber = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      if (!hash[nums[i]]) {
          hash[nums[i]] = 1;
      } else {
          hash[nums[i]]++;
      }
  }
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === 1) {
          return nums[i];
      }
  }
};

// Time Complexity: O(n)
// We traverse the array twice: once for counting and once for checking.
// Space Complexity: O(n)
// The hash map may store counts for up to n elements in the worst case.

// Approach 2, using XOR
var singleNumber = function(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
      xor ^= nums[i];
  }
  return xor;
};

// Time Complexity: O(n)
// We traverse the array once.
// Space Complexity: O(1)
// Only a few variables are used, no extra space proportional to input size.