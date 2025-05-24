/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let n = nums.length;
  let ans = new Array(2 * n);
  for (let i = 0; i < n; i++) {
      ans[i] = nums[i];
      ans[i + n] = nums[i];
  }
  return ans;
};

// other approach
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

// other approach
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};
// other approach
var getConcatenation = function (nums) {
  return Array.from({ length: nums.length * 2 }, (_, i) => nums[i % nums.length]);
};