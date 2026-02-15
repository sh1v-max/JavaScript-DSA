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


// approach 2, using SUM
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
var missingNumber = function(nums) {
  let xor = 0;
  let n = nums.length;

  // XOR all numbers from 0 to n
  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }

  // XOR all elements in the array
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor;
};

const nums3 = [9,6,4,2,3,5,7,0,1];
// console.log(missingNumber(nums3));