// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

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


// optimized approach: single traversal / one pass
// intuition:
// the selling day will be any day, but to get max profit, buying day should always be the min value 
// if we buy the stock at the left hand side, at the lowest price
// difference to that will be the max profit for any day
// and then we can find the max profit throughout the week

// we want to buy at the lowest possible price before we sell at a higher price later
// instead of comparing every pair (which is O(n^2))
// we'll track the minimum price and max profit we've seen so far while traversing the array
// at each step, we check if selling today (current price - minPrice) gives a higher profit than before
// we always make the best(greedy) local decision at each step(update minPrice or maxProfit)
// this way, we explore all possibilities efficiently in a single pass

// approach:
// initialize 'minPrice' as infinity to represent the highest possible initial value
// initialize 'maxProfit' as 0 since we start with no profit.
// loop through each price in the array:
//   - if current price is less than minPrice, update minPrice (better buy price found)
//   - else, calculate profit = current price - minPrice
//     and update maxProfit if this profit is greater than the previous maxProfit
// after the loop, return maxProfit as the result.
// this ensures we always buy before we sell and never miss the best opportunity

function maxProfit(prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))