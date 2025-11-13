// 1029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/

// a company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti],
// the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// return the minimum cost to fly every person to a city such that exactly n people arrive in each city

// Example 1:
// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

// Example 2:
// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859

// intuition:
// if we ignore the “exactly n people per city” rule,
// we would simply send everyone to whichever city is cheaper for them.
// but that can lead to imbalance — for example,
// maybe everyone is cheaper in city a, which breaks the rule.

// so how do we decide who goes where?
// we look at *how much extra* it costs to send a person to city b instead of city a.
// that’s the difference: (bCost - aCost)
// example:
// if someone costs [10, 20], difference = +10 → cheaper for city a
// if someone costs [400, 50], difference = -350 → much cheaper for city b
// so, a positive difference means "prefers city a",
// and a negative difference means "prefers city b".
// now if we sort everyone by this difference:
// - the ones who save a lot by going to a come first
// - the ones who save a lot by going to b come last
// after sorting, we just split the group into two halves:
// - first half → city a (they’re the best fit for a)
// - second half → city b (they’re the best fit for b)
// this way, exactly n people go to each city
// and the overall cost becomes minimum.

// approach:
// calculate the difference (b - a) for each person
// sort the array by this difference in descending order
// (so people who prefer a come first)
// send the first n people to city a, and the remaining n to city b
// add up the total cost accordingly

var twoCitySchedCost = function (costs) {
  // Sort the costs based on the difference between the two cities
  costs.sort((a, b) =>  (b[1] - b[0]) - (a[1] - a[0]))

  let res = 0
  const n = costs.length / 2

  // first half people to city a
  for (let i = 0; i < n; i++) {
    res += costs[i][0]
  }

  // last half people to city b
  for (let i = n; i < costs.length; i++) {
    res += costs[i][1]
  }

  return res
}
