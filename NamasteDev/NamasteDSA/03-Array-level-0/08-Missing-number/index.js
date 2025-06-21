// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
// 2 is the missing number in the range since it does not appear in nums.
    
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
// 2 is the missing number in the range since it does not appear in nums.
    
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
// 8 is the missing number in the range since it does not appear in nums.


// approach 1, brute-force
var missingNumber = function(nums) {
  nums.sort((a, b) => a - b);

  if (nums[0] !== 0) return 0;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1] + 1) {
          return nums[i - 1] + 1;
      }
  }

  return nums.length;
}

const nums = [9,6,4,2,3,5,7,0,1];
// console.log(missingNumber(nums));

// Time Complexity: O(n log n)
// Due to sorting the array.
// Space Complexity: O(1)
// Sorting is done in-place, and only a few variables are used.


// approach 2, using XOR
// The sum of numbers from 0 to n is given by the formula:
// total_sum = (n × (n + 1)) / 2
// Steps:
// Calculate total_sum using the formula above.
// Calculate the sum of all elements in the input array.
// The missing number is total_sum - sum_of_array.

var missingNumber2 = function(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
  }

  return totalSum - sum;
};

const nums2 = [9,6,4,2,3,5,7,0,1];
// console.log(missingNumber2(nums2));

// Time Complexity: O(n)
// We traverse the array once to compute the sum.
// Space Complexity: O(1)
// Only a few variables are used, no extra space proportional to input size.


// approach 3, using XOR
var missingNumber3 = function(nums) {
  let n = nums.length;
  let xor = 0;

  for (let i = 0; i <= n; i++) {
      xor ^= i;
  }

  for (let num of nums) {
      xor ^= num;
  }

  return xor;
};

const nums3 = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber3(nums3));
