function findMissingNumber(nums) {
  // Your implementation
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

//For the purpose of user debugging.
findMissingNumber([3,0,1]);

module.exports = findMissingNumber