// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/

// intuition:
// we start at altitude 0
// gain[i] represents the net altitude gain from point i to i+1
// so the altitude at each step is the cumulative sum of gain values
// this is essentially a prefix sum problem
// we build the running altitude and track the maximum altitude reached
// we must also consider the starting altitude 0

// approach:
// initialize currAlt = 0
// initialize maxAlt = 0
// iterate through gain array:
//   add gain[i] to currAlt
//   update maxAlt if currAlt is greater
// return maxAlt

var largestAltitude = function(gain) {
  let currAlt = 0
  let maxAlt = 0

  for (let i = 0; i < gain.length; i++) {
    currAlt += gain[i]
    maxAlt = Math.max(maxAlt, currAlt)
  }

  return maxAlt
}

// time complexity: O(n)
// space complexity: O(1)