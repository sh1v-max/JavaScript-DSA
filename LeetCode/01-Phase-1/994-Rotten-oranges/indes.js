// Rotten oranges
// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// LeetCode problem 994
// https://leetcode.com/problems/rotting-oranges/

// approach: use a queue (BFS)
// push all initially rotten oranges into the queue with time = 0
// for each orange in the queue:
//   - rot all 4-directionally adjacent fresh oranges
//   - push newly rotten oranges into queue with time + 1
// track the max time taken while rotting
// after BFS ends, check if any fresh orange is still left
// if yes, return -1 (not all can rot)
// else, return the max time taken

function orangesRotting(grid) {
  let m = grid.length
  let n = grid[0].length
  let queue = []

  // add all rotten in queue
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0])
        // 0 is to maintain time
      }
    }
  }
  let time = 0

  // for each rotten orange in the queue:
  //   - rot adjacent fresh
  //   - push next rotten into queue with time + 1
  //   - track time
  while (queue.length) {
    let [x, y, min] = queue.shift()

    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2
      queue.push([x - 1, y, min + 1])
    }
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2
      queue.push([x + 1, y, min + 1])
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2
      queue.push([x, y + 1, min + 1])
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2
      queue.push([x, y - 1, min + 1])
    }

    time = Math.max(min, time)
  }

  // now check for fresh ones
  // if found, -1, else time
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1
      }
    }
  }

  return time
}

function orangesRotting(grid) {
  const rows = grid.length
  const cols = grid[0].length

  let queue = [] // for BFS: will store [row, col, time]
  let fresh = 0
  let time = 0

  // add all oranges in the queue
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]) // rotten orange with minute 0
      } else if (grid[i][j] === 1) {
        fresh++
      }
    }
  }

  // directions: up, down, left, right
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  // BFS traversal
  while (queue.length > 0) {
    const [r, c, t] = queue.shift() // get current rotten
    time = Math.max(time, t) // update time passed

    for (let [dr, dc] of directions) {
      const nr = r + dr
      const nc = c + dc

      // if in bounds and fresh orange is found
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
        grid[nr][nc] = 2 // rot it
        fresh-- // decrease fresh count
        queue.push([nr, nc, t + 1]) // add newly rotten to queue
      }
    }
  }

  // if fresh oranges remain, return -1
  return fresh === 0 ? time : -1
}

// time complexity: O(mn)
// space complexity: O(mn)
