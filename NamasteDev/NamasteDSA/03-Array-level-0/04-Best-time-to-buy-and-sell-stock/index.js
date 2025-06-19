// brute force
// time complexity: O(n^2)
// Loop over all pairs (i, j) where i < j
// Treat prices[i] as the buy price
// Treat prices[j] as the sell price
// Track the maximum profit
// it will take O(n^2) time, or a lot of time for bigger inputs

// solution will contain 2 for loop
function maxProfit(prices) {
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
