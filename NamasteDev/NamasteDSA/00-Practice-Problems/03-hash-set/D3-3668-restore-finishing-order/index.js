// 3668-Restore-Finishing-Order
// https://leetcode.com/problems/restore-finishing-order/

// intuition:
// we are given the finishing order of all participants
// and a list of friends (subset of participants)
// we need to return the friends in the same order as they appear in the race
// the key idea:
// we do NOT need to reorder anything
// the order array already represents the correct sequence
// we just need to filter out elements that are present in friends
// to efficiently check if an element is a friend,
// we use a Set (O(1) lookup)
// so the plan is:
// -store all friends in a Set
// -iterate through the order array
// -if the current element exists in the Set, add it to res

// approach:
// create a Set from friends
// initialize an empty res array
// loop through order:
//   if current element exists in Set:
//   push it into res
// return res

var recoverOrder = function (order, friends) {
  // store friends in a set for fast lookup
  let set = new Set(friends)

  let res = []

  // iterate through order
  for (let i = 0; i < order.length; i++) {
    if (set.has(order[i])) {
      res.push(order[i])
    }
  }

  return res
}

// time complexity: O(n)
// iterating over order -> O(n)
// set lookup -> O(1)
// total -> O(n)

// space complexity: O(f)
// set stores friends -> O(f) (f <= 8, so almost constant)
