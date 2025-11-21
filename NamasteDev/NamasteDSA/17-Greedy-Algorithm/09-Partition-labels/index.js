// 763. Partition Labels
// https://leetcode.com/problems/partition-labels/

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

// note that the partition is done so that after concatenating all the parts in order, the resultant string should be s

// return a list of integers representing the size of these parts

// partition labels — greedy + interval merging
//
// intuition:
// each character in the string spans from its first occurrence to its last
// a valid partition must fully contain that entire span
// so every character behaves like an interval: [first[ch], last[ch]]
//
// if we scan the string left, right and keep extending the current partition’s end
// to include the last occurrence of every character we meet,
// then the moment our current index reaches that partitionEnd,
// we know the entire partition is self-contained
//, no character inside it appears outside of it
//
// then we cut the partition there and start a new one
//
// this greedy always works because extending to the farthest last-occuring character
// ensures we never split a character across partitions,
// and cutting as early as possible maximizes number of partitions

// approach:
// - build first[] and last[] occurrence arrays for all 26 characters
// - initialize partitionStart = 0, partitionEnd = 0
// - loop through string:
//        update partitionEnd = max(partitionEnd, last[currChar])
//        if i == partitionEnd:
//             we found a complete partition
//             push its size, (partitionEnd - partitionStart + 1)
//             start a new one, partitionStart = i + 1
// - return the partition sizes

var partitionLabels = function (s) {
  let res = []
  let first = Array(26).fill(-1)
  let last = Array(26).fill(-1)

  // store first and last occurrence of each character to build the partitions
  for (let i = 0; i < s.length; i++) {
    let ch = s.charCodeAt(i) - 97
    if (first[ch] === -1) {
      first[ch] = i
    }
    last[ch] = i
  }

  // now we've first and last occurrence, we only need to merger all these intervals
  // to do that, we'll be using two pointers
  let partitionStart = 0
  let partitionEnd = 0
  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97

    // how to check if we found the new partition?
    if (partitionEnd < first[curr]) {
      res.push(partitionEnd - partitionStart + 1)
      partitionStart = partitionEnd = i
    }

    partitionEnd = Math.max(partitionEnd, last[curr])
  }

  // push the last partition
  // because the last partition won't be pushed inside the loop as we're only pushing after finding the new partition
  if (partitionEnd - partitionStart + 1 > 0) {
    res.push(partitionEnd - partitionStart + 1)
  }
  return res
}

// time: O(n), one pass to fill first/last, one pass to form partitions
// space: O(1), as the size of first and last array is constant (26)