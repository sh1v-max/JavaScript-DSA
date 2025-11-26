// 134. Gas Station
// https://leetcode.com/problems/gas-station/

// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// example 1:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// example 2:
// Input: gas = [2,3,4], cost = [3,4,3]
// Output: -1
// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.

// gas station, greedy net gain intuition + approach
// intuition:
// - each station gives you gas[i] and costs cost[i] to go to the next
// - define net gain at station i: net[i] = gas[i] - cost[i]
//   - this tells us how much fuel you actually gain (or lose) when leaving station i
// - if the sum of net[i] over all stations < 0:
//     - total fuel available < total fuel needed
//     - impossible to complete the circuit
//     - return -1
// - next, consider the cumulative gain while trying to start at a station:
//     - currGain accumulates net gains as we move along
//     - if currGain becomes negative at station i:
//         - starting from the current candidate starting station will fail before reaching i+1
//         - you cannot complete the loop from this start
//         - reset currGain = 0
//         - set i+1 as new candidate starting station
// - reasoning why i+1 is valid candidate:
//     - any station before i would also have failed, because currGain < 0 proves we run out of fuel somewhere along the way
//     - by resetting at i+1, we start fresh, ignoring previous deficit
// - continue this for all stations
// - after traversing all stations:
//     - if totalGain >= 0, the candidate start we have is guaranteed to allow completing the circuit
//     - this works because the deficits before the candidate are compensated by the surplus afterwards

// approach:
// - initialize totalGain = 0, currGain = 0, startIndex = 0
// - iterate i = 0, n-1:
//       net = gas[i] - cost[i]
//       totalGain += net          // track overall feasibility
//       currGain += net           // track current segment feasibility
//       if currGain < 0:          // cannot continue from current candidate
//           currGain = 0
//           startIndex = i + 1    // try next station as new start
// - after loop:
//       if totalGain < 0, return -1
//       else, return startIndex

// why this approach works:
// - we know there is at most one solution if it exists
// - totalGain >= 0 ensures overall feasibility
// - currGain < 0 identifies impossible segments early
// - resetting startIndex whenever currGain < 0 guarantees we pick the only possible starting station

var canCompleteCircuit = function (gas, cost) {
  let totalGain = 0
  // totalGain tracks the overall net gas across the entire circuit
  // if it's negative, no solution
  let currGain = 0
  // currGain tracks the net gas from the current candidate starting station
  // if it's negative, curr start is invalid
  let res = 0

  for (let i = 0; i < gas.length; i++) {
    let gain = gas[i] - cost[i]
    // net gas at station i
    totalGain += gain
    // track overall net gain to check if it's possible
    currGain += gain
    // for the current start, if it's possible or not

    if (currGain < 0) {
      // if currGain is negative, it means
      // - starting from res to i will fail, because no fuel
      currGain = 0
      // reset currGain for new start
      res = i + 1
      // updating the next start
    }
  }
  if (totalGain < 0) {
    return -1
  }
  return res
}

// time: o(n), single pass through all stations
// space: o(1), only a few variables used
