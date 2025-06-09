function searchRotatedArray(nums = [], target = []) {
  // Your implementation
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) return mid;

      if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target < nums[mid]) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          if (nums[mid] < target && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }

  return -1;
}

//For the purpose of user debugging.
//pass your array and target in function call
const arr = [4, 5, 6, 7, 0, 1, 2];
console.log(searchRotatedArray(arr, 0));
console.log(searchRotatedArray(arr, 3));

searchRotatedArray();
module.exports = searchRotatedArray
