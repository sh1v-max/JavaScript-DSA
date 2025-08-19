// 15. Three Sum
// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// intuition
// we can reduce k-sum to k-1 sum
// fix one element, and solve for two sum
// array must be sorted

// approach: sorting, two pointer
// sort the array
// loop through array and fix the first element
// also we will check for the duplicates
// if i>0 && nums[i]==nums[i-1], skip
// now, for each fixed element, use two pointer to find other two num
// l = i+1, r = n-1
// we will run until l<r
// check for sum using nums[i]+nums[l]+nums[r]
// if sum<0 then l++, if sum>0 then r--
// if sum==0, push to result, and do l++, r-- to avoid duplicates
// we need to take care of duplicates at l, r, and i

function threeSum(arr) {
  arr.sort((a, b) => a - b)
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    // checking for same val twice
    if (arr[i] != arr[i - 1]) {
      twoSum(arr, i, ans)
    }
  }
  return ans
}

function twoSum(arr, x, ans) {
  let l = x + 1
  let r = arr.length - 1

  while (l < r) {
    let sum = arr[l] + arr[r] + arr[x]
    if (sum < 0) {
      l++
    } else if (sum > 0) {
      r--
    } else {
      ans.push([arr[x], arr[l], arr[r]])
      // skip duplicates for l
      while (l < r && arr[l] === arr[l + 1]) l++
      // skip duplicates for r
      while (l < r && arr[r] === arr[r - 1]) r--
      // also we're updating l n r because there can be multiple sols
      l++
      r--
    }
  }
}

// time complexity: O(n^2)
// space complexity: O(n)