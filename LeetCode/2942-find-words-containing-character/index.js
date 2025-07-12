/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

// approach:
// two nested loops, outer for words, and inner for char
// if word contains char, push index in a new array
// return array
 
var findWordsContaining = function (words, x) {
  let res = []
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if (words[i][j] === x) {
              res.push(i)
              break
          }
      }
  }
  return res
};

// time complexity: O(n^2)
// space complexity: O(n)