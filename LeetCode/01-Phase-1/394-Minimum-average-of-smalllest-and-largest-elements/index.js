// 3194. Minimum average of smallest and largest elements
// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/

// insight
// each step removes the smallest and largest elem
// so we can sort the array and use two pointers to calculate the avg at each step
// we only care about min avg, so we can keep the track of it

// intuition:
// we will sort the array and use two pointers to calculate the avg at each step
// get the smallest and largest elem, calculate the avg
// keep the track of min avg
// move both pointers inward and repeat until they cross

// approach: two pointers
// sort the array
// initialize two pointers, left and right for start and end
// minAvg to Infinity
// while left < right
// avg = (nums[left] + nums[right])/2
// minAvg = Math.min(minAvg, avg)
// left++, right--
// return minAvg

var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b)

  let left = 0
  let right = nums.length - 1
  let minAvg = Infinity

  while (left < right) {
    let abg = (nums[left] + nums[right]) / 2
    minAvg = Math.min(minAvg, avg)
    left++
    right--
  }

  return minAvg
}

// time complexity: O(n lon n) due to sorting
// space complexity: O(1)