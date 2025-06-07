/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
      if (price < minPrice) {
          minPrice = price;
      } else {
          maxProfit = Math.max(maxProfit, price - minPrice);
      }
  }

  return maxProfit;
};