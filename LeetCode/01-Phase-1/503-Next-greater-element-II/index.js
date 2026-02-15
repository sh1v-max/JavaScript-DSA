// Given a circular array nums, return the Next Greater Number for every element.
// The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which wraps around as a circular array.

// If it doesn't exist, return -1 for that position.

// approach: use a stack
// duplicate the array to handle circular behavior
// traverse from right to left
// for each number:
//   - remove all smaller numbers from the stack
//   - if any number is left in stack, that’s the next greater
//   - save it in answer, and push current number into stack
// finally, return first half of answer (original array size)

function nextGreaterElements(nums) {
  let arr = [...nums, ...nums]
  let n = arr.length
  let stack = []
  let ans = Array(n).fill(-1)

  // traversing twice the length
  stack.push(arr[n - 1])
  for (let i = n - 2; i >= 0; i--) {
    // pop all elements from stack <= current element
    while (stack.length) {
      let top = stack[stack.length - 1]
      if (arr[i] < top) {
        // next greater element found
        ans[i] = top
        break
      } else {
        stack.pop()
      }
    }
    stack.push(arr[i])
  }
  return ans.slice(0, n / 2)
}

// time: O(n)
// space: O(n)

// what if we're not allowed to double the array?
// optimized approach 2: using stack, no doubling array
// instead of duplicating the array, we will simulate it by looping twice (2*n)
// traverse from right to left using i%n wrap
// for each element:
//    - pop smaller or equal elements from the stack (they can't be the answer)
//    - if stack is not empty, its top is the next greater element
//    - push the current element to the stack for future comparisons

function nextGreaterElements(nums) {
  let n = arr.length
  let stack = []
  let ans = Array(n).fill(-1)

  stack.push(arr[n - 1])
  // traversing twice the length, start from the second last, as 2n (twice the length)
  for (let i = (2 * n) - 2; i >= 0; i--) {
    // pop all elements from stack <= current element
    while (stack.length) {
      let top = stack[stack.length - 1]
      if (arr[i % n] < top) {
        // next greater element found
        ans[i % n] = top
        break
      } else {
        stack.pop()
      }
    }
    // pushing all we're iterating through
    stack.push(arr[i % n])
  }
  // no need to slice now
  return ans
}

// time complexity: O(n)
// space complexity: O(n)

// we are running the logic twice on the same array
// when circular kind of problems, either double the array or loop twice the length, to mimic circular behavior