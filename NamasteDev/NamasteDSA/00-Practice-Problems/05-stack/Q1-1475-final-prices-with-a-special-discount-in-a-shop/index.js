// 475-Final-Prices-With-a-Special-Discount-in-a-Shop
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

//  brute force soln
// var finalPrices = function (prices) {
//     let res = []

//     for (let i = 0; i < prices.length; i++) {
//         let discount = 0

//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] <= prices[i]) {
//                 discount = prices[j]
//                 // break is imp, because we're looking for the first smallest match only
//                 break
//             }
//         }
//         res.push(prices[i] - discount)
//     }

//     return res
// };

// time complexity: O(n^2)
// space: O(n)

// using stack

// intuition:
// for each price, we need to find the first smaller or equal element on the right
// that value becomes the discount
// brute force checks every element repeatedly, inefficient
// using stack helps:
// - track elements waiting for discount
// - resolve multiple elements in one go

// approach:
// create result array as copy of prices
// use stack to store indices
// iterate through prices:
// - while stack not empty and current price <= price at stack top:
// - apply discount for that index
// - pop from stack
// - push current index into stack
// remaining indices in stack, no discount
// return result

var finalPrices = function (prices) {
  // adding all prices in res
  let res = [...prices]
  let stack = []

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      let idx = stack.pop()
      res[idx] -= prices[i]
    }
    stack.push(i)
  }
  return res
}

// time complexity: O(n)
// space complexity: O(n)
