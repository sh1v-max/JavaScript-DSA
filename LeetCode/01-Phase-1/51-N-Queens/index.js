// 51. N-Queens
// https://leetcode.com/problems/n-queens/

// the n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other

// given an integer n, return all distinct solutions to the n-queens puzzle

// each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '-' indicate a queen and a empty space respectively

// example 1:
// input: n = 4
// output: [["-Q--","---Q","Q---","--Q-"],["--Q-","Q---","---Q","-Q--"]]
// explanation: there exist two distinct solutions to the 4-queens puzzle as shown above

// example 2:
// input: n = 1
// output: [["Q"]]

// backtracking
// intuition:
// we need to place n queens on an n×n chessboard so that no two queens
// attack each other — meaning no two share the same row, column, or diagonal
// since each queen must occupy a unique row, we can place queens row by row
// at every row, we try all possible columns and only continue if it's safe
// this safety check ensures that the current column and diagonals
// are not already occupied by previous queens
// backtracking fits perfectly here — we explore a possibility (place a queen),
// and if it leads to conflict later, we undo it and try another column
// the key idea is:
// - one queen per row
// - use sets to track attacked columns and diagonals
// - if all rows are filled, we found a valid configuration
// - otherwise, backtrack (remove the queen) and explore new positions

// approach:
// create an n×n board filled with '.' to represent empty cells
// maintain three sets:
//   - colSet → columns already occupied
//   - digSet → diagonals under attack (row - col)
//   - antiDigSet → anti-diagonals under attack (row + col)
// define a recursive function backtrack(row):
//   if row === n → all queens placed → push board to result
//   for each column in the current row:
//     - skip if column or diagonals already under attack
//     - otherwise:
//         - place 'Q' at (row, col)
//         - add column, diagonals to sets
//         - recurse for next row
//         - remove 'Q' and unmark sets (backtrack step)
// after recursion, convert each valid board to an array of strings and return all results

var solveNQueens = function (n) {
  let res = []
  // create the board
  let board = Array.from({ length: n }, () => Array(n).fill('.'))
  // console.log(board)

  let backtrack = (board, row, colSet, digSet, antiDigSet) => {
    // base case: if we have filled all the rows, we found a solution
    if (row === n) {
      // console.log(board)
      res.push(transform(board))
      console.log(res)
    }

    // at each row, we'll have n choices
    for (let col = 0; col < n; col++) {
      // checking if we can place a queen at board[row][col]
      if (
        colSet.has(col) ||
        digSet.has(row - col) ||
        antiDigSet.has(row + col)
      ) {
        continue
      }

      // adding queen at board[row][col] and maintaining all the sets to check if we can place a queen at board[row][col]
      board[row][col] = 'Q'
      colSet.add(col)
      digSet.add(row - col)
      antiDigSet.add(row + col)

      // calling backtrack for next row
      backtrack(board, row + 1, colSet, digSet, antiDigSet)
      // when backtracking, removing the queen from board[row][col] and removing the entries from all the sets
      board[row][col] = '.'
      colSet.delete(col)
      digSet.delete(row - col)
      antiDigSet.delete(row + col)
    }
  }

  backtrack(board, 0, new Set(), new Set(), new Set())
  // using set to keep track of columns and diagonals where queens are already placed
  // and initially, we'll start with filling row 0
  return res
}

let transform = (board) => {
  let newBoard = []
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(''))
  }
  return newBoard
}

// our board will look like this for n = 4
// [
//   [ '-', '-', '-', '-' ],
//   [ '-', '-', '-', '-' ],
//   [ '-', '-', '-', '-' ],
//   [ '-', '-', '-', '-' ]
// ]

// time complexity: O(n!) — each row can have up to n choices, recursively explored
// space complexity: O(n²) — board + recursion stack + sets