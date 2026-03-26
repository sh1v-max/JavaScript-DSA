// 2418-Sort-the-People
// https://leetcode.com/problems/sort-the-people/

// intuition:
// we are given two arrays: names and heights
// each name corresponds to a height at the same index
// we need to return names sorted in descending order of heights
// since heights are distinct, we can map: height -> name
// then we sort the heights array in descending order
// and use the map to fetch corresponding names

// approach:
// create a Map where:
// - key = height
// - value = name
// sort heights array in descending order
// iterate through sorted heights:
// for each height:
// - get corresponding name from map
// - push into result
// return result

var sortPeople = function (names, heights) {
  // creating a map
  let map = new Map()
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i])
  }
  console.log(map)

  // sorting heights
  let sortedHeights = [...heights].sort((a, b) => b - a)

  let res = []
  for (let h of sortedHeights) {
    res.push(map.get(h))
  }

  return res
}

// time complexity:
// building map: O(n)
// sorting: O(n log n)
// building result: O(n)
// total: O(n log n)

// space complexity:
// map + sorted array -> O(n)
