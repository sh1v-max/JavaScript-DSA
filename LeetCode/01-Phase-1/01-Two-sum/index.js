// 01: two-sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// approach: brute force
// loop through all pairs of numbers and check if they add up to target
// The outer loop selects the first element
// The inner loop selects the second element that comes after the first one
// For each pair (i, j), check if nums[i] + nums[j] === target
// If yes, return their indices [i, j]

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// time complexity: O(n^2)
// space complexity: O(1)

// optimal approach: use a hash map to store the indices of the numbers
// first loop to create a map of numbers to their indices
// then loop through the array again and for each number, check if target - number exists in the map
// if it does, return the indices of the two numbers
// also check for the corner case, for similar numbers, ensure that the indices are not the same
//     if (map[pair] && map[pair] !== i)


function twoSum(nums, target) {
  let n = nums.length
  let map = {}
  // creating a map to store the indices of the numbers
  for (let i = 0; i < n; i++) {
    map[nums[i]] = i
  }

  for (let i = 0; i < n; i++) {
    let pair = target - nums[i]
    // checking corner case for similar numbers
    if (map[pair] && map[pair] !== i) {
      return [i, map[pair]]
    }
  }
}

// time complexity: O(n), n for creating, n for checking
// space complexity: O(n)


// another approach: more optimal
// use a hash map to store the indices of the numbers
// loop through the array and for each number, check if target - number exists in the hash map
// if it does, return the indices of the two numbers
// if it doesn't, add the number and its index to the hash map

function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
}

// time complexity: O(n)
// space complexity: O(n)