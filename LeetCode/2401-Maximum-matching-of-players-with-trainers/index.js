// 2410. Maximum Matching of Players With Trainers
// https://leetcode.com/problems/maximum-matching-of-players-with-trainers/

// You are given a 0-indexed integer array players, where players[i] represents the ability of the ith player. You are also given a 0-indexed integer array trainers, where trainers[j] represents the training capacity of the jth trainer.

// The ith player can match with the jth trainer if the player's ability is less than or equal to the trainer's training capacity. Additionally, the ith player can be matched with at most one trainer, and the jth trainer can be matched with at most one player.

// Return the maximum number of matchings between players and trainers that satisfy these conditions.

// Example 1:
// Input: players = [4,7,9], trainers = [8,2,5,8]
// Output: 2
// Explanation:
// One of the ways we can form two matchings is as follows:
// - players[0] can be matched with trainers[0] since 4 <= 8.
// - players[1] can be matched with trainers[3] since 7 <= 8.
// It can be proven that 2 is the maximum number of matchings that can be formed.

// Example 2:
// Input: players = [1,1,1], trainers = [10]
// Output: 1
// Explanation:
// The only possible matching is players[0] with trainers[0] since 1 <= 10.
// Thus, the maximum number of matchings that can be formed is 1.

// greedy
// intuition:
// each player needs a trainer whose capacity is >= the player’s ability
// each player can only be matched once, and each trainer can only train one player
// to maximize total matches, we should always match the weakest player
// this ensures that no strong trainer is wasted on a weak player,
// keeping stronger trainers available for players who actually need them

// approach:
// sort players in ascending order
// sort trainers in ascending order
// use two pointers:
//   i → index for players
//   j → index for trainers
// while both pointers are in bounds:
//     if trainers[j] >= players[i]:
//          match them → increment both (i++, j++)
//     else:
//          trainer too weak → move trainer pointer (j++)
// the number of matches is just i (how many players got matched)

var matchPlayersAndTrainers = function (players, trainers) {
  // sort both arrays
  players.sort((a, b) => a - b)
  trainers.sort((a, b) => a - b)

  let i = 0
  let j = 0

  while (i < players.length && j < trainers.length) {
    if (trainers[j] >= players[i]) {
      // trainer can handle this player, so match
      i++
      j++
    } else {
      // trainer is weak, try next
      j++
    }
  }

  return i
}

// time: O(n log n + m log m) for sorting
// Sorting players → O(n log n)
// Sorting trainers → O(m log m)
// Two-pointer scan → O(n + m)
// space: O(1) if sorting is in-place
