// 122. Best time to buy and sell stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// on each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// however, you can sell and buy the stock multiple times on the same day, ensuring that you never hold more than one share at a time.

// fnd and return the maximum profit you can achieve.

// example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

// greedy
// intuition:
// we can buy and sell multiple times, holding at most one share at a time
// the goal is to maximize total profit
// observe that any increase from one day to the next is a potential profit
// so instead of trying to find exact buy/sell days globally,
// we can just sum up all consecutive positive differences
// this works because buying at a local minimum and selling at the next local maximum
// is equivalent to summing all positive daily gains
// for example: prices = [1,2,3,4]
//   profit = (2-1) + (3-2) + (4-3) = 3
//   same as buying at 1 and selling at 4

// approach:
// - initialize totalProfit = 0
// - iterate from i = 1 to prices.length - 1
//     calculate diff = prices[i] - prices[i-1]
//     if diff > 0 → add it to totalProfit
// - return totalProfit
// this way we capture all increasing sequences

var maxProfit = function (prices) {
  let res = 0
  for( let i = 1; i < prices.length; i++){
    let profit = prices[i] - prices [ i-1]
    if(profit > 0){
      res = res + profit
    }
  }
  return res
}

// time complexity: O(n)
// iterating through prices array once
// space complexity: O(1)