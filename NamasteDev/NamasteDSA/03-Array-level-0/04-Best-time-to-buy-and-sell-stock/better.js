// time complexity O(n)

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

// or
function maxProfit1(prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
  }

  return maxProfit
}

// or

function maxProfit2(prices) {
  let min = prices[0]
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min
    }
    if (prices[i] < min) {
      min = prices[i]
    }
  }
  return maxProfit
}

// time complexity: O(n)
// space complexity: O(1)
