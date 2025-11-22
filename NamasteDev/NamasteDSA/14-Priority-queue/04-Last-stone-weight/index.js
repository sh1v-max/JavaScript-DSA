// 1046. Last stone weight
// https://leetcode.com/problems/last-stone-weight/

// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
// Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
// Return the weight of the last remaining stone. If there are no stones left, return 0.

// example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// example 2:
// Input: stones = [1]
// Output: 1

// example 3:
// Input: stones = []
// Output: 0

// intuition:
// at each turn, we want the two heaviest stones
// smashing two largest stones reduces the problem size by 1 or 2
// max heap allows us to always get the largest two stones efficiently

// example: stones = [2,7,4,1,8,1]
// heap = [8,7,4,2,1,1]
// - take 8 and 7 → 1 left → heap = [4,2,1,1,1]
// - take 4 and 2 → 2 left → heap = [2,1,1,1]
// - take 2 and 1 → 1 left → heap = [1,1,1]
// - take 1 and 1 → 0 left → heap = [1]
// return 1

// heap / priority queue — greedy
// intuition:
// the problem is about repeatedly taking the two heaviest stones and smashing them
// - if they’re equal, both are destroyed
// - if not, the smaller is destroyed, and the larger is reduced by the smaller's weight
// at each step, you always want to pick the heaviest stones to reduce the array optimally
// this is a classic **max-heap (priority queue) scenario**, where we always extract the largest elements first
// continuing this process until <= 1 stone remains guarantees correct final weight

// approach:
// - create a max-heap (priority queue) of stones
// - while heap has more than 1 stone:
//       - extract two largest stones x and y
//       - if x != y, insert (y - x) back into heap
//       - if x == y, do nothing (both destroyed)
// - return the last remaining stone (heap top) or 0 if none remain


var lastStoneWeight = function (stones) {
  let pq = new MaxPriorityQueue()

  for (let i = 0; i < stones.length; i++) {
    pq.enqueue(stones[i])
  }

  // or we can directly use the the method to build maxPQ using an array
  // let pq = MaxPriorityQueue.fromArray(stones)

  while (pq.size() > 1) {
    let y = pq.dequeue()
    let x = pq.dequeue()
    if (y - x > 0) {
      pq.enqueue(y - x)
    }
  }
  return pq.dequeue() || 0
}

// time: O(n log n), each enqueue/dequeue in heap is log n, and there are up to n-1 smash operations
// space: O(n), for the heap