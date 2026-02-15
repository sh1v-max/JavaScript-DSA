// Next greater element 1

// You have two arrays of numbers:
// array A, which is a shorter array
// array B, which has all the numbers from array A plus some more
// For each number in array A, find the first number in array B that is bigger than it.
// If there is no bigger number, return -1.

// Input: A = [1, 2, 3], B = [2, 4, 1, 3]
// Output: [3, 4, -1]

// nums1 = [1, 3, 5]
// nums2 = [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
// 1 → next greater is 2
// 3 → next greater is 4
// 5 → next greater is 6

// approach (brute force):
// for every number x in nums1
// find its index in nums2,
// and from there scan rightward to find the first number > x
// return the number, and if not found, return -1

// time complexity: O(n * m) which is not good
// space complexity: O(n)

function nextGreaterElement(nums1, nums2) {
  const res = []

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
    const indexInNums2 = nums2.indexOf(num)
    let found = -1

    for (let j = indexInNums2 + 1; j < nums2.length; j++) {
      if (nums2[j] > num) {
        found = nums2[j]
        break
      }
    }

    res.push(found)
  }

  return res
}

// optimized (using stack)

// approach:
// make a map to store the next greater number for each number in nums2
// start by adding the last element of nums2 to the stack and map it to -1
//      (since it has no element on the right)
// loop through nums2 from second-last to the first element (right to left)
// for each element:
//    - if it is less than the top of the stack, then the top is its next greater element 
//    - store that in the map
//    - if it is greater than or equal to the top of the stack, keep popping from the stack 
//      until you find a greater element or the stack becomes empty
//         - if a greater element is found, map the current number to it
//         - if stack becomes empty, map the current number to -1
// push the current number onto the stack
// finally, for each element in nums1, look up its next greater value from the map and build the result array

function nextGreaterElement(nums1, nums2) {
  const map = {}
  const stack = []

  // adding last ele to stack and assigning -1 in map
  stack.push(nums2[nums2.length - 1])
  map[nums2[nums2.length - 1]] = -1

  // loop through nums2
  for (let i = nums2.length - 2; i >= 0; i--) {
    let top = stack[stack.length - 1]
    if (nums2[i] < top) {
      // if it's less then top, NGE will be top
      map[nums2[i]] = top
    } 
    // if it's greater then top, we need to find NGE
    else {
      while (stack.length) {
        if (stack[stack.length - 1] < nums2[i]) {
          stack.pop()
        } else {
          map[nums2[i]] = stack[stack.length - 1]
          break
        }
      }
      if (stack.length === 0) {
        map[nums2[i]] = -1
      }
    }
    // adding ele to stack
    stack.push(nums2[i])
  }

  // result for nums1 using the map
  const res = []

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
    res.push(map[num])
  }

  return res
}

// another way

// approach:
// make a map to store the next greater number for each number in nums2.
// we will loop through nums2 from right to left.
// for each number, we will keep removing the smaller numbers from the stack until we find a bigger number.
// if we find a bigger number, that is the next greater number.
// if we don't find a bigger number, the next greater number is -1.
// then we will push the current number onto the stack.

function nextGreaterElement(nums1, nums2) {
  const map = {}
  const stack = []

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i]

    while (stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop()
    }

    if (stack.length === 0) {
      map[num] = -1
    } else {
      map[num] = stack[stack.length - 1]
    }

    stack.push(num)
  }

  // result for nums1 using the map
  const res = []

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
    res.push(map[num])
  }

  return res
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// for all:
// next greater element
// next smaller element
// previous greater element
// previous smaller element
// we will use stack
