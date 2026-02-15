// leetcode question: 34. Find First and Last Position of Element in Sorted Array
// find the first and last position of target value in sorted array nums, O(log n)

// intuition:
// we will be using two binary search algo,
// one to find the starting and other for ending position
// reducing search range by n/2 each time to get O(log n)

// approach: binary search
// create an array [-1, -1] to store res
// first binary to find the starting
// we will check if m is less than target, l = m + 1
// else, r = m (we have to include the mid if equals)
// second binary to find the ending
// we will check if m is greater than target, r = m - 1
// else, l = m (we have to include the mid if equals)
// add l and r to res array and return res

// corner cases:
// 1. there can be a arr[l] !== target and arr[r] !== target, so we need to check that too
// 2. in case when l == r, both element at l and r are same
// our loop will run into infinite loop
// so we need to check that too
// and to solve that, we will do Math.ceil in second binary

function searchRange(nums, target) {
  let l = 0
  let r = nums.length - 1
  let res = [-1, -1]

  // first binary search or starting position
  while (l < r) {
    // this loop will run until l ==== r
    // and that will be the starting point
    let m = l + Math.floor((r - l) / 2)
    if (nums[m] < target) {
      l = m + 1
    } else {
      r = m
    }
  }
  if (nums[l] === target) {
    res[0] = l
  }

  // second binary search for ending pos
  l = 0
  r = nums.length - 1
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2)
    if (nums[m] > target) {
      r = m - 1
    } else {
      l = m
    }
  }
  if (nums[l] === target) {
    res[1] = r
  }
  return res
}

// time complexity: O(log n)
// space complexity: O(1)

// another approach
// again two binary search
// storing matches during search
// 1. for first pos: if find target, store it in res and keep moving r = m - 1 to find the earlier one too
// 2. for second pos:store the target and keep moving l = m+1 to find the later one too
// will run while(l <= r), loop will stop before hitting the exact boundary
// not biasing Math.floor and Math.ceil like in previous approach

function searchRange(nums, target){
    let l = 0;
    let r = nums.length - 1;
    let res = [-1, -1];

    // condition will run till l <= r
    // because we have to check for l == r too
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
          // updating and storing ans every time m = target
            res[0] = m;
            // and more r = m - 1
            r = m - 1;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = nums.length - 1;

    // similarly to get the second pos
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
            res[1] = m;
            l = m + 1;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return res;
}


// time complexity: O(log n)
// space complexity: O(1)