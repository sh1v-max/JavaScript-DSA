// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

// given an array intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// greedy approach
// intuition:
// merging intervals becomes easy once they are sorted by start time
// because after sorting, any overlapping intervals will appear next to each other
// the idea is simple:
//   - take the first interval as your current merged interval
//   - for each next interval:
//         if its start <= previous interval’s end, they overlap, merge them
//         else, no overlap, push the interval as a new block
// merging means: extend the end of the previous interval to the max end between the two
// the result array keeps only the final merged non-overlapping intervals

// approach:
// - sort intervals by their start value
// - initialize result = [ first interval ]
// - loop from index 1 to end:
//       let last = result[result.length - 1]
//       if intervals[i].start <= last.end:
//            merge by: last.end = max(last.end, intervals[i].end)
//       else:
//            push intervals[i] to result (new non-overlapping interval)
// - return result

var merge = function (intervals) {
  // sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0])
  // we'll already push the first interval to res array
  let res = [intervals[0]]

  // iterating through the intervals from index 1
  for (let i = 1; i < intervals.length; i++) {
    // if it's overlapping
    if (res[res.length - 1][1] >= intervals[i][0]) {
      // merge the intervals by updating the end time of the last interval in res
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    } else {
      // if it's not overlapping
      res.push(intervals[i])
    }
  }
  return res
}

// time complexity: O(n log n) due to sorting
// o(n) for the single pass
// total: O(n log n)

// space complexity: O(n) for the result array