// 135. Candy
// https://leetcode.com/problems/candy/

// there are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// you are giving candies to these children subjected to the following requirements:
// each child must have at least one candy.
// children with a higher rating get more candies than their neighbors.
// return the minimum number of candies you need to have to distribute the candies to the children.

// one pass valley/peak greedy approach
// intuition:
// - ratings create natural shapes: rising slopes, falling slopes, and flats
// - rising slope (a < b < c): candies must strictly increase forward
// - falling slope (x > y > z): candies must strictly increase backward
// - every child gets 1 candy initially → base = n
// - we track:
//     up   = length of the current increasing slope
//     down = length of the current decreasing slope
// - the peak between up/down slopes gets counted twice, so subtract min(up, down)
// - one pass is enough because every segment is handled as soon as it ends

// approach:
// - initialize answer = n (each child gets 1)
// - scan from left to right:
//     - if ratings go up: increase up counter, add to answer
//     - if ratings go down: increase down counter, add to answer
//     - if equal: reset both counters
//     - whenever a full up→down sequence closes, subtract min(up, down)
// - result is the total minimum candies

// why this works:
// - rising slopes ensure left-neighbor rule is satisfied, assigning increasing candies
// - falling slopes ensure right-neighbor rule is satisfied
// - both slopes share the same peak; whichever slope is shorter under-assigns candies to the peak
// - subtracting min(up, down) corrects exactly the double-count of the peak
// - entire ratings array decomposes into alternating patterns of:
//       flat segments → rising slope → falling slope → flat → ...
// - everything is handled in a single scan

var candy = function (ratings) {
  let n = ratings.length
  let res = n
  let i = 1

  while (i < n) {
    // if both are equal, just continue, no need to give extra candy
    if (ratings[i] === ratings[i - 1]) {
      i++
      continue
    }
    // for tracking up
    // curr element is greater than previous
    let up = 0
    while (i < n && ratings[i] > ratings[i - 1]) {
      ++up
      res = res + up
      i++
    }
    // for tracking down
    // curr element is less than previous
    let down = 0
    while (i < n && ratings[i] < ratings[i - 1]) {
      ++down
      res += down
      i++
    }
    // as we've counted peak element twice
    // we need to remove the minimum value from the peak
    res = res - Math.min(up, down)
  }
  return res
}

// time: o(n) — ratings scanned once
// space: o(1) — only a few counters used