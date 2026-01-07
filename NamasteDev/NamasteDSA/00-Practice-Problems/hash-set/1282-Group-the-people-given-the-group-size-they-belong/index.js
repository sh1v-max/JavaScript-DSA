// 1282. Group the People Given the Group Size They Belong To
// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

// There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

// Return a list of groups such that each person i is in a group of size groupSizes[i].

// Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

// Example 1:
// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]
// Explanation:
// The first group is [5]. The size is 1, and groupSizes[5] = 1.
// The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
// The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.
// Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

// Example 2:
// Input: groupSizes = [2,1,3,3,3,2]
// Output: [[1],[0,5],[2,3,4]]

// intuition:
// - each person i specifies the exact size of the group they must belong to
// - people with the same required group size must be grouped together
// - there can be multiple groups with the same size
// - we keep collecting people for a given size until the group reaches that size
// - once a group reaches its required size, it becomes complete and independent
// - completed groups can be safely added to the result

// approach:
// - we will use a map to store the groups:
//   - key represents a group size k
//   - value represents a list of people currently forming a group of size k
// - iterate through all people using their index i:
//   - let k = groupSizes[i]
//   - if k does not exist in the map, initialize an empty list for it
//   - add person i to the list corresponding to k
//   - if the list length becomes equal to k:
//     - add this list to the result array
//     - reset the list in the map to start forming a new group of size k
// - after processing all people, return the result array

var groupThePeople = function (groupSize) {
  // we'll store the groups by size in a map
  const map = new Map()
  const res = []

  for (let i = 0; i < groupSize.length; i++) {
    const size = groupSize[i]

    // if the group size is not in the map, add it
    // and initialize it as an empty array
    if (!map.has(size)) {
      map.set(size, [])
    }

    // add the current person i to the group with required group size
    let group = map.get(size)
    group.push(i)

    // now, if the group size is equal to the required group size, add it to the res array and reset the group
    if (map.get(size).length === size) {
      res.push(map.get(size))
      map.set(size, [])
    }
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)
