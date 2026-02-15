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

// Approach 2, using XOR (best solution)
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


// naive solution
function singleNumber(nums) {
  const count = {};

  // Count frequency of each number
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  // Find the number that appears only once
  for (let num in count) {
    if (count[num] === 1) {
      return Number(num); // keys are strings in objects
    }
  }
}


// or
function singleNumber(nums) {
  const count = {};

  // First loop: Count each number
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  }

  // Second loop: Find the number with count === 1
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (count[num] === 1) {
      return num;
    }
  }
}
