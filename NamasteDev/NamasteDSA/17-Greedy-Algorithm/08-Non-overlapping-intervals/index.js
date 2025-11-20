// 435. Non-overlapping Intervals
// https://leetcode.com/problems/non-overlapping-intervals/

// given an array of intervals where intervals[i] = [starti, endi],
// return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// greedy
// intuition:
// the goal is to remove the minimum number of intervals so that the rest don’t overlap
// whenever you want to *keep as many non-overlapping intervals as possible*, 
// the best greedy move is: **keep the interval that ends the earliest**
// why? because an interval with a smaller end time leaves more room for future intervals
// so we sort intervals by end time and iterate
//
// for each interval:
//   if its start < previous end → it overlaps → remove it (increment count)
//   else → it doesn’t overlap → keep it and update `end`
//
// this greedy always works because choosing the earliest ending interval 
// always maximizes space for remaining ones, minimizing removals

// approach:
// - sort intervals by end time ascending
// - set `end = -Infinity` (or first interval’s end)
// - loop through each interval:
//       if interval.start < end:
//            overlaps → count++ (remove this interval)
//       else:
//            non-overlapping → keep it → update end = interval.end
// - return count

var eraseOverlapIntervals = function (intervals) {
  // sort based on end time
  intervals.sort((a, b) => a[1] - b[1])

  // traverse and count non overlapping intervals
  let count = 0
  let end = -Infinity
  for (let i = 0; i < intervals.length; i++) {
    // tracking end time of prev interval
    if (intervals[i][0] < end) {
      count++
    } else {
      // if not overlapping, updating end time
      end = intervals[i][1]
    }
  }
  return count
}

// time:
// O(n log n) sorting
// O(n) to scan the intervals
// space: O(1) 