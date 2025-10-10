// 167. two-sum-ii-input-array-is-sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers, in ascending order
// you may assume that each input would have exactly one solution, and you may not use the same element twice
// must use O(1) extra space
// you can return the answer in any order

// example 1:
// input: numbers = [2,7,11,15], target = 9
// output: [1,2]
// output: because numbers[1] + numbers[2] == 9, we return [1, 2].

// intuition:
// since the array is sorted, and there will only be one solution,
// we can use a two-pointer approach to find the two numbers
// we will increment or decrement the pointers based on the sum of the two numbers
// keep adjusting until you find the target sum

// approach: two pointer
// l = 0, r = n - 1
// while l < r:
// if arr[l] + arr[r] < target, increment l
// if arr[l] + arr[r] > target, decrement r
// if arr[l] + arr[r] == target, return [l + 1, r + 1]

function twoSum(numbers, target) {
  let l = 0
  // array is still 0-indexed, assuming to be 1-indexed
  let r = numbers.length - 1

  while (l < r) {
    let sum = numbers[l] + numbers[r]
    if (sum < target) {
      l++
    } else if (sum > target) {
      r--
    } else {
      return [l + 1, r + 1]
    }
  }
}

// time complexity: O(n)
// space complexity: O(1)

// using hashmap
// intuition:
// - we want two numbers that sum up to the target
// - idea: use a hashmap to store numbers we've seen along with their indices
// - for each number, calculate its complement: complement = target - current number
// - if complement exists in the hash → we've found the pair
// - otherwise, store the current number in the hash for future lookup

// approach:
// create empty object `map`
// iterate over numbers with index i:
// - calculate diff = target - numbers[i]
// - if map[diff] exists → return [map[diff]+1, i+1] (1-indexed)
// - else store map[numbers[i]] = i
// guaranteed to find a solution (per problem constraints)

function twoSumHash(numbers, target) {
  const map = {}

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i]
    if (map[diff] !== undefined) {
      return [map[diff] + 1, i + 1]
    }
    map[numbers[i]] = i
  }
}

// time complexity: O(n)
// space complexity: O(n)