// 1094. Car Pooling
// https://leetcode.com/problems/car-pooling/

// there is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

// you are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. the locations are given as the number of kilometers due east from the car's initial location

// return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise

// example 1:
// input: trips = [[2,1,5],[3,3,7]], capacity = 4
// output: false

// example 2:
// input: trips = [[2,1,5],[3,3,7]], capacity = 5
// output: true

// greedy, difference-array
// intuition:
// - each trip gives you:
//       numPassengers, pickup point (from), drop point (to)
// - instead of simulating every trip separately (which becomes messy with overlaps),
//   track how the passenger count *changes* across the entire eastward line.
// - use a "difference array":
//       at position `from`, passengers enter , add numPassengers
//       at position `to`, passengers leave  , subtract numPassengers
//   this marks how the number of people in the car changes at each location.
// - after marking all changes, walk from location 0, 1000,
//   keeping a running sum `usedCapacity` that tells you how many people are currently in the car.
// - if at any point:
//       usedCapacity > capacity
//      - car becomes overloaded
//      - impossible to serve all trips
//      - return false
// - if the sweep completes without exceeding capacity:
//      - the car can handle all pickups and drop-offs in order
//      - return true
// why difference array works:
// - passengers only get in or out at exact points
// - between those points, the count stays constant
// - overlapping trips automatically accumulate through the running sum
// - this avoids sorting or checking pairwise overlaps

// approach:
// - create location array of size 1001 (because 0 <= point <= 1000)
// - for each trip [p, from, to]:
//       location[from] += p    // passengers get in
//       location[to]   -= p    // passengers get out
// - initialize usedCapacity = 0
// - loop i = 0, 1000:
//       usedCapacity += location[i]   // apply changes
//       if usedCapacity > capacity:
//            return false             // capacity exceeded at this point
// - if loop completes
// return true

// why this approach works:
// - difference array builds exact passenger changes at every kilometer
// - prefix sum reconstructs real-time passenger count
// - if capacity is ever violated, we detect it immediately
// - if not violated anywhere, the route is valid

var carPooling = function (trips, capacity) {
  let location = new Array(1001).fill(0)
  // because it's said in the constraints that 0 <= fromi < toi <= 1000

  // tracking every point where passengers get in and out
  for (let i = 0; i < trips.length; i++) {
    let [passengers, from, to] = trips[i]
    location[from] = location[from] + passengers
    // adding passengers in
    location[to] = location[to] - passengers
    // removing passengers out
    // now we've build the location array
  }
  // now we'll track used capacity
  // track people in and people out
  let usedCapacity = 0
  for (let i = 0; i < 1001; i++) {
    usedCapacity += location[i]
    if (usedCapacity > capacity) {
      return false
      // because at any point if used capacity exceeds total capacity, that means it's not possible to pick up and drop off all passengers
    }
  }
  return true
}

// time: o(n + 1000), effectively o(n) since 1000 is constant
// space: o(1), fixed-size array (1001), independent of input scale
