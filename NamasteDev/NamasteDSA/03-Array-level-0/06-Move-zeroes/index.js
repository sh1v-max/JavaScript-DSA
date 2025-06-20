// move all zeroes to the end of the array, using in-place method

function moveZeroes(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);