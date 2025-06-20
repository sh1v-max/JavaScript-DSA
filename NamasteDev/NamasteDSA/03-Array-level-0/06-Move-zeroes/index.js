// Given an integer array nums, move all 0’s to the end of it while 
// maintaining the relative order of the non-zero elements.
// Note: You must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
// Time Complexity: O(n)
// One pass to shift non-zero elements.
// Another pass to fill in zeros.
// Space Complexity: O(1)
// In-place modifications with constant extra space.

function moveZeroes(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

// another approach, without in-place method
function moveZeroes2(nums) {
  let result = [];

  // Step 1: Push non-zero elements
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    }
  }

  // Step 2: Add the same number of zeros at the end
  let zeroCount = nums.length - result.length;
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}
const nums2 = [0, 1, 0, 3, 12];
moveZeroes2(nums2);
console.log(nums2);