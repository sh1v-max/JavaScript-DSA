// 860. Lemonade Change
// https://leetcode.com/problems/lemonade-change/

// at a lemonade stand, each lemonade costs $5.
// customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide change to each customer, so that the net transaction is that the customer pays $5.
// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

// Example 1:
// Input: [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: [5,5,10,10,20]
// Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can't give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.

// greedy
// intuition:
// you start with zero money, and every customer either pays with 5, 10, or 20
// for every customer, you MUST give correct change on the spot
// this means:
//   - if they pay 5, no change needed, just store it
//   - if they pay 10, you MUST give one 5 back
//   - if they pay 20, you MUST give 15 back
// the greedy rule:
//   when giving change for a 20, ALWAYS try to give:
//        one 10 + one 5  (preferred)
//   because this preserves more $5 bills for future transactions
//   if no $10 is available, fallback to giving three $5 bills
// why greedy works:
//   $5 bills are the most scarce and most critical for future customers
//   using a $10 first reduces less important denominations
//   if at any point you cannot give correct change, return false

// approach:
// - maintain two counters: count5 and count10
// - iterate through each bill:
//     if bill == 5:
//         count5++
//     if bill == 10:
//         we must give a $5, count5--
//         count10++
//     if bill == 20:
//         first try to give one 10 and one 5 (best option)
//         else try to give three 5s
// - after every operation, if count5 < 0, we failed to give change, return false
// - if loop finishes, return true

var lemonadeChange = function (bills) {
  let wallet = [0, 0]
  // maintaining the count of 5 and 10 dollar bills in wallet

  // traverse through each customer
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      wallet[0] += 1
      // received a 5 dollar bill, increment count of 5 dollar bills
    } else if (bills[i] === 10) {
      wallet[1] += 1
      wallet[0] -= 1
      // received a 10 dollar bill, decrement count of 5 dollar bills and increment count of 10 dollar bills
    } else {
      // we'll be greedy here, if our wallet has a 10 dollar bill, we'll give that as change
      if (wallet[1] > 0) {
        wallet[1] -= 1
        wallet[0] -= 1
      } else {
        wallet[0] -= 3
      }
    }
    // if at any point count of 5 dollar bills is negative, return false
    if (wallet[0] < 0) return false
  }
  return true
}

// time complexity: O(n)
// iterating once

// space complexity: O(1)
// only two counters used