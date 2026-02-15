// 739 daily temperature

// Given an array of integers temperatures represents
// the daily temperatures, return an array answer
// such that answer[i] is the number of days you have
// to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible,
// keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// approach: using stack
// traverse from right to left
// maintain a stack of days with temperatures in decreasing order
// for each day:
// pop from stack until we find a day with a warmer temperature
// if the stack is not empty, the next warmer day is at the top of the stack,
// so we store the difference
// we push the current day onto the stack

function dailyTemperature(arr) {
  const n = arr.length
  const res = new Array(n).fill(0)
  // stack stores index
  const stack = []

  for (let i = n - 1; i >= 0; i--) {
    // pop all days with temperature <= current
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop()
    }
    // because the next warmer day is at the top
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1] - i
    }
    // push the index
    stack.push(i)
  }
  return res
}

// another approach

function dailyTemperature(arr) {
  let stack = []
  let n = arr.length
  let ans = new Array(n).fill(0)

  stack.push(n - 1)
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1]
      if (arr[i] >= arr[top]) {
        stack.pop()
      } else {
        ans[i] = top - i
        break
      }
    }
    stack.push(i)
  }
  return ans
}

// time complexity: O(n)
// space complexity: O(n)