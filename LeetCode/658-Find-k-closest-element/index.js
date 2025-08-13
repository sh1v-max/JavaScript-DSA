// 658. Find K Closest Elements
// https://leetcode.com/problems/find-k-closest-elements/

// given a sorted array arr
// an integer k, numbers to return
// an integer x, the target number
// you must find the k numbers in arr that are closest to x
// return them sorted in ascending order (luckily, the array is already sorted)
// if two numbers are equally close to x, pick the smaller one

// how "closest" is measured
// the distance between two numbers is calculated as:
// |number - x|
// example: if x = 3:
// distance from 2, |2 - 3| = 1
// distance from 4, |4 - 3| = 1 (tie, pick smaller, which is 2 if both can’t be chosen)

// approach 1: two pointers sliding approach, linear

// Intuition:
// since the array is sorted, all the k closest elements will be in a contiguous subarray
// so we can start with a window of size k at the beginning and slide it to the right until we find the closest elements

// approach
// start with a window of size k at the starting
// compare the distance of the left and the next element after the window
// if the next element is closer to x, move the window to the right
// else stop, this is the answer
// return the window

function findClosestElements(arr, k, x) {
  let l = 0
  let r = k - 1

  while (r < arr.length - 1) {
    // let distL = Math.abs(arr[l] - x)
    // let distR = Math.abs(arr[r + 1] - x)
    let distL = x - arr[l]
    let distR = arr[r + 1] - x

    // slide win based on which dist is smaller
    if (distR < distL) {
      l++
      r++
    } else {
      break
    }
  }
  return arr.slice(l, r + 1)
}

// time complexity: O(n)
// space complexity: O(k)

// approach 2: sliding window with binary search

// Intuition:
// since the array is sorted, all the k closest elements will be in a contiguous subarray

// approach 2:
// the window of size k will start somewhere between index 0  and (n - k)
// we will apply binary search to find the best starting index of the k closest elements window
// we will compare the distance of mid and mid + k element with x
// if x is closer to mid, current window it to far
// move the window to the left, l = mid + 1
// else, move the window to left, r = mid (including mid)
// loop will end when l == r, and that will be the starting index of the best window

function findClosestElements(arr, k, x) {
  let l = 0
  let r = arr.length - 1

  while (l < r) {
    let m = l + Math.floor((r - l) / 2)
    // if (Math.abs(arr[m + k] - x) < Math.abs(arr[m] - x)) {
    if (arr[m + k] - x < x - arr[m]) {
      l = m + 1
    } else {
      r = m
    }
  }
  return arr.slice(l, l + k)
}

// time complexity: O(log(n) + k)
// space complexity: O(k)


// we're not using absolute values because at times they hide the direction and for this problem we need to know the direction

// Math.abd(arr[l] - x)
// it only gives the distance from x
// but it doesn't tell if arr[l] is to the left or right of x
// it contradicts when distance is the same