// 3021. Alice and Bob playing flower game
// https://leetcode.com/problems/alice-and-bob-playing-flower-game/description/?envType=daily-question&envId=2025-08-29

// A better problem Description:
// The setup:
// There are two rows (lanes) of flowers.
// First lane has x flowers.
// Second lane has y flowers.
// Alice and Bob play a game:
// Alice always starts.
// On each turn, the player must pick exactly 1 flower from any one lane.
// If, after a player’s turn, no flowers are left at all (both lanes empty), that player wins.
// The task:
// We are given two limits:
// n → maximum number of flowers allowed in lane 1 (1 ≤ x ≤ n).
// m → maximum number of flowers allowed in lane 2 (1 ≤ y ≤ m).
// We need to count how many pairs (x, y) exist where Alice is guaranteed to win.
// The key trick (who wins?):
// Notice: The total number of flowers = x + y.
// Players take exactly 1 flower per turn.
// So the game lasts x + y turns total.
// Alice goes first → Alice plays on turns: 1, 3, 5, … (all odd turns).
// Bob goes second → Bob plays on turns: 2, 4, 6, … (all even turns).
// 👉 If x + y is odd, then the last turn is odd, so Alice wins.
// 👉 If x + y is even, then the last turn is even, so Bob wins.
// So the condition for Alice to win is simple:
// ✅ Alice wins if (x + y) is odd.
// The problem becomes:
// Count how many (x, y) pairs with
// 1 ≤ x ≤ n
// 1 ≤ y ≤ m
// make (x + y) odd.

// Example 1:
// n = 3, m = 2
// Possible pairs:
// (1,1) → even → Bob wins ❌
// (1,2) → odd → Alice wins ✅
// (2,1) → odd → Alice wins ✅
// (2,2) → even → Bob wins ❌
// (3,1) → even → Bob wins ❌
// (3,2) → odd → Alice wins ✅
// Alice wins in 3 pairs → Output = 3 ✔

// Example 2:
// n = 1, m = 1
// Only pair: (1,1) → even → Bob wins ❌
// No valid pairs → Output = 0 ✔

// brute force:
// this only happen when one is even and the other is odd
// try every possible pair of (x, y) and count those where one is odd and the other is even

// approach:
// loop x from 1 to n
// for each x, loop y from 1 to m
// check if (x + y) is odd, count++

function flowerGame(n, m) {
  let count = 0
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= m; y++) {
      if ((x + y) % 2 === 1) count++
    }
  }
  return count
}

// time: O(n * m)
// space: O(1)

// optimized approach:

// intuition:
// total number of flowers = x + y
//  if x + y is odd, and alice makes the first move, so she'll also make the last move, alice wins
// if x + y is even, and alice makes the first move, so bob will make the last move, bob wins
// alice wins only if x + y = odd

// approach:
// we just need to count the number of pairs where x + y is odd
// follows x is odd, y is even or x is even, y is odd
// number of odd x = (n + 1) /2, even x = n / 2
// number of odd y = (m + 1) /2, even y = m / 2
// now, total valid pair will be
// then count will be odd x * odd y + even x * even y

function flowerGame(n, m) {
  let odd_x = Math.floor((n + 1) / 2)
  let even_x = Math.floor(n / 2)
  let odd_y = Math.floor((m + 1) / 2)
  let even_y = Math.floor(m / 2)

  return odd_x * even_y + even_x * odd_y
}

// time: O(1)
// space: O(1)

// another approach:
// alice wins if x + y is odd
// total possible pairs = n * m
// there will be exactly half the number of odd pairs

function flowerGame(n, m) {
  return Math.floor((n * m) / 2)
}
