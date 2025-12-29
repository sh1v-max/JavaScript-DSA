// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/

// there is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// the test cases are generated so that the answer will be less than or equal to 2 * 10^9.

// example 1:
// Input: m = 3, n = 7
// Output: 28
// example 2:

// example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// simple recursive solution
var uniquePaths0 = function (m, n) {
  let fn = (x, y) => {
    // base case
    // when we reach the starting cell
    if (x === 0 && y === 0) return 1
    // if we go out of bounds
    if (x < 0 || y < 0) return 0

    // sub problem relations
    return fn(x - 1, y) + fn(x, y - 1)
  }

  // unique paths to reach the last cell
  return fn(m - 1, n - 1)
}

// optimized recursive solution with memoization (dp)

// intuition:
// - the robot starts at (0, 0) and wants to reach (m-1, n-1)
// - at any cell (x, y), the robot can come from only two directions:
//     1. from the top cell -> (x-1, y)
//     2. from the left cell -> (x, y-1)
// - so, number of unique paths to (x, y) is the sum of paths
//   to the cell above and the cell to the left
// - this creates overlapping subproblems, since many paths
//   repeatedly ask for the same (x, y)
// - hence, dynamic programming with memoization is ideal

// approach (top-down dp / memoization):
// - define a recursive function fn(x, y) that returns
//   the number of unique paths to reach cell (x, y)
// - base cases:
//     - if (x == 0 && y == 0), return 1
//       (we are at the starting cell)
//     - if (x < 0 || y < 0), return 0
//       (out of grid bounds)
// - recurrence relation:
//     fn(x, y) = fn(x - 1, y) + fn(x, y - 1)
// - use a 2d dp array to store already computed results
// - start recursion from fn(m - 1, n - 1)

var uniquePaths1 = function (m, n) {
  // we will use a 2D array to store the results of subproblems
  let dp = Array.from({ length: m }, () => Array(n).fill(-1))
  let fn = (x, y) => {
    // base case
    // when we reach the starting cell
    if (x === 0 && y === 0) return 1
    // if we go out of bounds
    if (x < 0 || y < 0) return 0

    // if we have already solved this subproblem, return the stored result
    if (dp[x][y] !== -1) return dp[x][y]
    // sub problem relation
    return (dp[x][y] = fn(x - 1, y) + fn(x, y - 1))
  }

  // unique paths to reach the last cell
  return fn(m - 1, n - 1)
}

// time complexity: O(m*n)
// space complexity: O(m*n) for dp array + O(m+n) for recursion stack

// bottom-up, tabulation method (dp)

// intuition:
// - the robot can only move right or down
// - to reach any cell (i, j), the robot must come from:
//     1. the cell directly above -> (i - 1, j)
//     2. the cell directly to the left -> (i, j - 1)
// - therefore, the number of unique paths to (i, j)
//   is the sum of unique paths to those two cells
// - instead of solving recursively, we build the solution
//   iteratively from the smallest subproblems

// approach (bottom-up dp / tabulation):
// - create a 2d dp array of size m x n
// - dp[i][j] represents the number of unique paths
//   to reach cell (i, j) from (0, 0)
// - initialize:
//     - first row with 1 (only one way: move right)
//     - first column with 1 (only one way: move down)
// - for remaining cells:
//     dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
// - the answer is stored at dp[m - 1][n - 1]

var uniquePaths = function (m, n) {
  // we will use a 2D array to store the results of subproblems
  let dp = Array.from({ length: m }, () => Array(n).fill(-1))

  // filling row 0 and column 0 with 1
  for (let i = 0; i < m; i++) dp[i][0] = 1
  for (let j = 0; j < n; j++) dp[0][j] = 1

  // now we will fill the all other cells
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // sub problem relation
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

// time complexity: O(m*n)
// space complexity: O(m*n) for dp array