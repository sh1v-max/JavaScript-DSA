// 2942. Find words containing character
// https://leetcode.com/problems/find-words-containing-character/
// given array and a char
// return array of indexes of words containing char

// approach:
// two nested loops, outer for words, and inner for char
// if word contains char, push index in a new array
// return array

function findWords(words, char) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === char) {
        res.push(i)
        // using break to exit, no need to run after finding the char
        break
      }
    }
  }
  return res
}

// time complexity: O(n^2)
// space complexity: O(1)
// because we are not using res itself in any operation so O(1)
// no data structure that scales with the input

// other approach

function findWords(words, char) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(char)) {
      res.push(i)
    }
  }
  return res
}

// time complexity: O(n^2)
// space complexity: O(1)

// using set
// intuition:
// we need to find indices of words that contain a given character x
// - one approach: for each word, check if x exists
// - using a Set for each word allows O(1) lookup per character
// - convert the word into a Set of characters → check if x exists in Set
// - if yes, include its index in the result array

// approach:
// initialize an empty array result
// iterate over words with index i:
// - create a Set of characters for words[i]
// - if Set contains x, push i into result
// return result

function findWordsContainingChar(words, x) {
  const result = []

  for (let i = 0; i < words.length; i++) {
    const charSet = new Set(words[i])
    // store all unique characters of the word
    if (charSet.has(x)) {
      // check if x exists
      result.push(i)
      // include index
    }
  }

  return result
}

// time complexity: O(n * m), n = number of words, m = average word length
// space complexity: O(n + m), Set for each word
