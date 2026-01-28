// 36. Valid sudoku
// https://leetcode.com/problems/valid-sudoku/

// determine if a 9 x 9 sudoku board is valid. only the filled cells need to be validated according to the following rules:
// each row must contain the digits 1-9 without repetition
// each column must contain the digits 1-9 without repetition
// each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// example 1:
// input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// output: true

// example 2:
// input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// output: false
// explanation: same as example 1, except with the 5 in the top left corner being modified to 8. since there are two 8's in the top left 3x3 sub-box, it is invalid

// intuition (set-based validation):
// - a valid sudoku board must satisfy three independent constraints:
//   - no duplicate digits in any row
//   - no duplicate digits in any column
//   - no duplicate digits in any 3x3 sub-box
// - empty cells ('.') do not affect validity and can be ignored
// - the board does not need to be solvable; only current validity matters
// - each constraint can be checked independently using a set
// - sets allow constant-time detection of duplicates

// approach:
// - iterate through each row and column using a single outer loop
// - for each index i:
//   - use one set to track digits seen in row i
//   - use another set to track digits seen in column i
//   - if a digit repeats in either, return false
// - after validating rows and columns, validate 3x3 sub-boxes:
//   - iterate over the 3x3 grid of boxes
//   - for each box, use a set to track seen digits
//   - scan the 3x3 cells belonging to that box
//   - if a duplicate digit is found, return false
// - if all checks pass, the board is valid

var isValidSudoku = function (board) {
  // we'll check for rows, columns and boxes simultaneously
  // row check
  // for (let r = 0; r < 9; r++) {
  //   const seen = new Set()
  //   for (let c = 0; c < 9; c++) {
  //     const val = board[r][c]
  //     if (val === '.') continue
  //     if (seen.has(val)) return false
  //     seen.add(val)
  //   }
  // }

  // // column check
  // for (let c = 0; c < 9; c++) {
  //   const seen = new Set()
  //   for (let r = 0; r < 9; r++) {
  //     const val = board[r][c]
  //     if (val === '.') continue
  //     if (seen.has(val)) return false
  //     seen.add(val)
  //   }
  // }

  // in single loop
  for (let i = 0; i < 9; i++) {
    const rowSeen = new Set()
    const colSeen = new Set()

    for (let j = 0; j < 9; j++) {
      // row check
      const rowVal = board[i][j]
      if (rowVal !== '.') {
        if (rowSeen.has(rowVal)) return false
        rowSeen.add(rowVal)
      }

      // column check
      const colVal = board[j][i]
      if (colVal !== '.') {
        if (colSeen.has(colVal)) return false
        colSeen.add(colVal)
      }
    }
  }

  // sub box check
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const seen = new Set()
      for (let r = row * 3; r < row * 3 + 3; r++) {
        for (let c = col * 3; c < col * 3 + 3; c++) {
          const val = board[r][c]
          if (val === '.') continue
          if (seen.has(val)) return false
          seen.add(val)
        }
      }
    }
  }

  return true
}

// time complexity: O(1) => 9x9 board size is constant
// space complexity: O(1) => sets can hold at most 9 elements (digits 1-9)
