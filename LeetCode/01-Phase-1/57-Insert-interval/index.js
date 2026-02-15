// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/

// you are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// greedy algorithm
// intuition:
// the intervals array is already sorted and non-overlapping
// inserting newInterval means it might:
//   - appear completely to the left (no overlap)
//   - overlap with some intervals in the middle
//   - appear completely to the right (no overlap)
// so the idea is to walk through intervals in order and handle these 3 regions
// - push all intervals that end before newInterval starts — these never overlap
// - for all intervals that overlap (interval.start <= newInterval.end):
//         merge by expanding newInterval boundaries:
//         newInterval.start = min(newInterval.start, interval.start)
//         newInterval.end   = max(newInterval.end, interval.end)
// - once overlap ends, push the merged newInterval
// finally: push all remaining intervals that come after it
// this way, the ordering is preserved and all overlaps get combined into one

// approach:
// - initialize res array and pointer i = 0
// - step 1: while intervals[i].end < newInterval.start:
//              push intervals[i] → move i
// - step 2: while intervals[i] overlaps with newInterval:
//              merge by updating newInterval.start/end
//              move i
// - push the merged newInterval
// - step 3: push all remaining intervals (i to end)
// - return res

var insert = function (intervals, newInterval) {
  let res = []

  let i = 0
  // left non overlapping part
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i])
    i++
  }

  // overlapping part
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    // start time
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    // min of start of both intervals
    // end time
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    // max of end of both intervals
    i++
  }
  res.push(newInterval)

  // right non overlapping part
  while (i < intervals.length) {
    res.push(intervals[i])
    i++
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)
