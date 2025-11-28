// 135. Candy
// https://leetcode.com/problems/candy/

// there are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// you are giving candies to these children subjected to the following requirements:
// each child must have at least one candy.
// children with a higher rating get more candies than their neighbors.
// return the minimum number of candies you need to have to distribute the candies to the children.

// two pass greedy approach
// intuition:
// - each child must get at least one candy
// - if a child has a higher rating than a neighbor, they must get more candies than that neighbor
// - this creates two "directions" of constraint:
//     1. left, right: each child compared to the left neighbor
//     2. right, left: each child compared to the right neighbor
// - a child might have higher rating than both neighbors, so we need to satisfy both constraints
// - taking the maximum of left to right and right to left ensures all neighbor rules are satisfied

// approach:
// - initialize two arrays of size n filled with 1 (ltr and rtl) for left to right and right to left passes
// - left to right pass:
//       for i = 1 → n-1:
//           if ratings[i] > ratings[i-1]:
//               ltr[i] = ltr[i-1] + 1   // give more than left neighbor
// - right to left pass:
//       for i = n-2 → 0:
//           if ratings[i] > ratings[i+1]:
//               rtl[i] = rtl[i+1] + 1   // give more than right neighbor
// - final allocation:
//       for each child i: candies[i] = max(ltr[i], rtl[i])
// - sum all candies[i] to get minimum total

// why this works:
// - left to right ensures all "increasing from left" sequences are satisfied
// - right to left ensures all "increasing from right" sequences are satisfied
// - taking max at each child ensures both neighbors' conditions are satisfied simultaneously

var candy = function (ratings) {
  // two pass approach
  let n = ratings.length
  // for left to right
  let ltr = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ltr[i] = ltr[i - 1] + 1
    }
  }
  // for right to left
  let rtl = new Array(n).fill(1)
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rtl[i] = rtl[i + 1] + 1
    }
  }

  // final calculation, max of both sides
  for (let i = 0; i < n; i++) {
    ltr[i] = Math.max(ltr[i], rtl[i])
  }
  // sum of all
  return ltr.reduce((a, b) => a + b, 0)
}

// time: o(n), two linear passes + final linear sum
// space: o(n), two arrays of size n (ltr and rtl)