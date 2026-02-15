// 79. Word search
// https://leetcode.com/problems/word-search/

// given a m x n grid of characters board and a string word, return true if word exists in the grid

// the word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. the same letter cell may not be used more than once

// backtracking
// intuition:
// the problem asks whether a given word exists in a 2d grid of characters
// the word can be formed by sequentially adjacent cells (up, down, left, right),
// and the same cell cannot be used more than once
// this means — for each cell that matches the first letter of the word,
// we need to explore all possible paths to see if we can form the word
// backtracking is the perfect approach here
// it allows us to explore one possibility, and if it doesn't work,
// we backtrack (undo our step) and try another
// the main idea is:
// - try every cell as a starting point
// - if it matches the first character, begin exploring in all four directions
// - mark it as visited so we don't reuse it in the same path
// - move to the next character in the word
// - if we reach the end of the word, that means the word exists
// - if not, revert the cell back to original and continue searching
// this is a typical dfs + backtracking pattern

// approach:
// loop through every cell in the grid
// - if a cell matches the first character of the word,
//   start a recursive search from there
// the recursive function (backtrack) takes three parameters:
//   - current coordinates (x, y)
//   - nextIndex → the index of the next character we need to match
// base case:
//   - if nextIndex === word.length, it means we've matched the entire word
//     mark result as true and return
// mark the current cell as visited by replacing it with a placeholder like '#'
// (this prevents revisiting the same cell in the same path)
// explore all four directions from the current cell:
//   - up (x - 1, y)
//   - down (x + 1, y)
//   - left (x, y - 1)
//   - right (x, y + 1)
// only continue if the next cell matches the next character
// after all directions are checked, restore the original character of the cell
// (this is the backtracking step)
// if any path successfully forms the word, return true
// if no path works, return false


var exist = function (board, word) {
  let res = false
  let m = board.length
  let n = board[0].length
  // m and n are rows and columns

  let backtrack = (x, y, nextIndex) => {
    // base case
    // if i've reached the end of the word, that means i've found the word, mark res as true and return
    if (nextIndex === word.length) {
      res = true
      return
    }

    // when we've already visited a cell, we need to mark it as visited
    // so that we don't visit it again in the same path
    // we can do this by changing the value of the cell to a special character
    // and then changing it back after the backtrack call (we'll do that later)
    let temp = board[x][y]
    board[x][y] = '#'

    // calling backtrack on all possible direction
    // up
    if (x > 0 && board[x - 1][y] === word[nextIndex])
      backtrack(x - 1, y, nextIndex + 1)
    // down
    if (x < m - 1 && board[x + 1][y] === word[nextIndex])
      backtrack(x + 1, y, nextIndex + 1)
    // left
    if (y > 0 && board[x][y - 1] === word[nextIndex])
      backtrack(x, y - 1, nextIndex + 1)
    // right
    if (y < n - 1 && board[x][y + 1] === word[nextIndex])
      backtrack(x, y + 1, nextIndex + 1)

    // and when backtracking, we need to change the value back to original
    board[x][y] = temp
  }
  // our first char can be at any place, so we need to try for all places
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        backtrack(i, j, 1)
        // we need to pass nextIndex, i and j to get the top, right, bottom, left positions
      }
    }
  }
  // backtrack()

  return res
}

// time complexity:  o(l * 3^n)
// - for each cell, grid length is row * col (let's say l), in the worst case we explore 4 directions (out of which, only 3 is valid, can't go back) for each character in word (length n)
// space complexity: o(n)
// - recursion stack depth can go up to the length of the word(n)
// key takeaway:
// dfs + backtracking allows exploring every path safely without reusing cells.