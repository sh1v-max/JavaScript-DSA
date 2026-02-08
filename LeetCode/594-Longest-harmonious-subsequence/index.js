// 594. Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/

// intuition (sliding approach):
// since sequence does not require continuity, 
// we can sort the array
// after sorting, equal and close numbers are grouped together
// we use two pointers (left, right)
// expand right pointer
// if diff between nums[right] and nums[left] > 1
// shrink window from left
// if diff === , update max length
// return maxLength

// approach:
// sort nums
// initialize left = 0, maxLength = 0 
// for right from 0 to n - 1
// while nums[right] 0 nums[left] > 1
// left++
// if nums[right] - nums[left] === 1
// update and return maxLength

var findLHS = function(nums){
  nums.sort((a, b) => a - b)

  let left = 0
  let maxLength = 0

  for(let right = 0; right < nums.length; right++){
    while(nums[right] - nums[left] > 1){
      left++
    }

    if(nums[right] - nums[left] === 1){
      maxLength = Math.max(maxLength, right - left + 1)
    }
  }

  return maxLength
}

// time complexity: O(nlogn), sorting takes O(nlogn), sliding window takes O(n)
// space complexity: O(1)

// another approach (using two pointer):
// intuition:
// since it's a subsequence, elements do not need to be continuous
// a harmonious subsequence requires max - min = 1
// so the subsequence must contain only two distinct numbers: x and x+1
// if we know the frequency of each number,
// then for every number x, if x+1 exists,
// the harmonious subsequence length is freq[x] + freq[x+1]
// we just need to find the maximum among these

// approach:
// create a frequency map of nums
// initialize maxLength = 0
// for each number in the map:
// - if number + 1 exists in map
// - update maxLength = max(maxLength, freq[num] + freq[num+1])
// return maxLength

var findLHS = function(nums) {
  let freq = {}
  
  // build frequency map
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }
  
  let maxLength = 0
  
  // check harmonious pairs
  for (let num in freq) {
    num = Number(num)
    if (freq[num + 1]) {
      maxLength = Math.max(maxLength, freq[num] + freq[num + 1])
    }
  }
  
  return maxLength
}

// time complexity: O(n)
// space complexity: O(n)