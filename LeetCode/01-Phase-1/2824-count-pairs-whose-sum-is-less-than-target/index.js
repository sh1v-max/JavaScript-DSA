// 2824. Count pairs whose sum is less than target
// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

// given nums, len n, and target
// return count of pairs whose sum is less than target

// intuition: two pointers
// we need to count how many index pairs (i, j) satisfy i < j and nums[i] + nums[j] < target
// sort the array
// use two pointers to count the number of pairs that satisfy the condition
// if a small num and a big num together are less than target, then than small num will also work with all numbers between them
// so we will increase count by (r - l)

// sort the array in ascending order
// use two pointers:
//  l starting from the left (smallest element)
//  r starting from the right (largest element)
// while l < r:
//  if arr[l] + arr[r] < target, then all pairs (l, l+1 … r) are valid
//    add (r - l) to the count and move l forward
//  otherwise, the sum is too large, so move r backward to reduce it
// continue until the pointers meet
// return the total count

var countPairs = function (nums, target) {
    // sort the nums
    let arr = nums.sort((a, b) => a - b)
    // console.log(arr)
    let l = 0
    let r = arr.length - 1
    let count = 0
    while (l < r) {
        if (arr[l] + arr[r] < target) {
            count = count + (r - l)
            // count++
            l++
        }
        else {
            r--
        }
    }
    return count
}

// time complexity: O(n log n)
// space complexity: O(1)