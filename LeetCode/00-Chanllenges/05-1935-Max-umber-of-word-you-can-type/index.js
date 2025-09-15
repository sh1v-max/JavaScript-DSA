// 1935. Maximum Number of Words You Can Type
// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

// given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all the broken letters, return the number of words in text you can type without using any of the broken letters.

// Example 1:
// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type the word "world" because it contains the letter 'd', which is in the string of broken letters.

// Example 2:
// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type the word "leet" because it contains the letter 'l', which is in the string of broken letters.

// Example 3:
// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either of the words "leet" or "code" because both contain the letter 'e', which is in the string of broken letters.

// approach: brute force
// split the text into words
// for each word, check if any letter is in the brokenLetters string
// if not, increment the count of typeable words
// return count

var canBeTypedWords = function(text, brokenLetters){
  let words = text.split(" ")
  let count = 0

  for(let word of words){
    let canType = true
    for (let ch of word){
      // checking if the brokenLetters string contains the ch
      if(brokenLetters.includes(ch)){
        canType = false
        break
      }
    }
    if(canType) count++
  }
  return count
}


// approach: using set
// split the text into words
// convert brokenLetters into a set for O(1) time to check
// for each word, check if any letter is in the brokenLetters set
// if not, increment the count of typeable words
// return count

var canBeTypedWords = function(text, brokenLetters){
  let words = text.split(" ")
  let brokenSet = new Set(brokenLetters)
  let count = 0

  for(let word of words){
    let canType = true
    for (let ch of word){
      if(brokenSet.has(ch)){
        canType = false
        break
      }
    }
    if(canType) count++
  }
  return count
}