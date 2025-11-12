// greedy algorithm builds up a solution step-by-step by always choosing the locally optimal choice at each step rather than choosing one that seems best at the moment in hopes that it will lead to the globally optimal solution

// in other words:
// at every stage, pick the best immediate option without reconsidering previous decisions

// works perfectly for problems that have the "greedy choice property", (local optimum leads to global optimum) and "optimal substructure", and (optimal solution can be built from optimal sub problems)
// examples of such problems include:
// maximum number of
// minimum cost / maximum Profit
// schedule / allocate / assign efficiently
// shortest / smallest / largest / longest (with constraints)
// non-overlapping intervals

// Find minimum number of coins to make a given amount

// problem statement:
// given an amount and a set of coin denominations
// determine the minimum number of coins needed to make that amount

// intuition:
// imagine you need to make 30 using coins of 1, 5, 10, 25.
// the smartest first step is to take the largest coin possible (25),
// then handle what’s left (5).
// this gives 25 + 5 = 30 using only 2 coins.
// this “take the biggest first” mindset is exactly what greedy does

// approach
//- sort all coin values in descending order
//- start with the largest coin and use it as many times as possible
//    without exceeding the remaining amount
//- subtract its value from the amount each time you use it
//- move to the next smaller coin when the current one can’t fit
//- repeat until the amount becomes zero

function minCoins(amount, coins) {
  coins.sort((a, b) => b - a) // largest to smallest
  let count = 0

  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin
      count++
    }
  }

  return count
}

console.log(minCoins(30, [1, 5, 10, 25])) //
