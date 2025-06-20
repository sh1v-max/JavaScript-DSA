// move all zeroes to the end of the array, using in-place method

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