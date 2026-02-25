// 2391. Minimum Amount of Time to Collect Garbage
// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

// intuition:
// we have 3  garbage types, metal, plastic and glass
// each truck starts at house 0
// picking 1 unit of garbage take 1 minute
// travel[i] is the time to go from house i to house i + 1
// only one truck works at a time, so total time is the sum of work done by each truck
// total time consists of:
// 1. total pickup time (count of all garbage units)
// 2. travel time for each truck up to the last house that contains its garbage type
// key observations:
// each truck only needs to travel up to the last occurrence of its garbage type
// no need to go beyond that
// we use prefix sum of travel time so we can quickly compute
// total travel time up to any house index

// approach:
// build prefix sum array for travel time
// iterate through garbage array:
// - count total garbage units
// - record last index of M, P, and G
// for each garbage type:
// - if it exists, add prefixTravel[lastIndex] to total
// return total pickup time + total travel time

var garbageCollection = function (garbage, travel) {
  let n = garbage.length

  // prefix travel time, calculating sum of travel time
  let prefixTravel = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    prefixTravel[i] = prefixTravel[i - 1] + travel[i - 1]
  }

  let totalPickupTime = 0
  let lastM = -1
  let lastP = -1
  let lastG = -1

  // count garbage and find last occurrence
  for (let i = 0; i < n; i++) {
    totalPickupTime += garbage[i].length

    if (garbage[i].includes('M')) {
      lastM = i
    }

    if (garbage[i].includes('P')) {
      lastP = i
    }

    if (garbage[i].includes('G')) {
      lastG = i
    }
  }

  let totalTravelTime = 0

  if (lastM !== -1) {
    totalTravelTime += prefixTravel[lastM]
  }
  if (lastP !== -1) {
    totalTravelTime += prefixTravel[lastP]
  }
  if (lastG !== -1) {
    totalTravelTime += prefixTravel[lastG]
  }

  return totalPickupTime + totalTravelTime
}

// time complexity: O(n)
// space complexity: O(n)

