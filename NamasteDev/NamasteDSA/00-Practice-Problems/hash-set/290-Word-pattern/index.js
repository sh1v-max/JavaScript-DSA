// 290. Word pattern
// https://leetcode.com/problems/word-pattern/

// given a pattern and a string s, find if s follows the same pattern
// here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s

// specifically:
// Each letter in pattern maps to exactly one unique word in s
// Each unique word in s maps to exactly one letter in pattern
// No two letters map to the same word, and no two words map to the same letter

// example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// explanation:
// The bijection can be established as:
// 'a' maps to "dog"
// 'b' maps to "cat"

// intuition: hashmap
// the pattern is a sequence of chars, and the string is a seq of words
// to follow the pattern, there must be a one-to-one mapping
// each char in the pattern must map to exactly one word and word to one char
// this means two diff chars cannot map to the same word
// and one char cannot map to two diff words
// to enforce this bijection, we need to check the mapping in both directions
// hashmaps allows us to store and validate these mappings in constant time

// approach (two hash maps, bijection):
// split the string s into an array of words
// if the pattern length and number of words are different, return false
// create two maps:
//   - charToWord: maps pattern characters to words
//   - wordToChar: maps words to pattern characters
// iterate through the pattern and words together
// for each index i:
//   - if the current character already exists in charToWord:
//       - check if it maps to the same word
//       - if not, return false
//   - otherwise:
//       - check if the word is already mapped to a different character
//       - if yes, return false
//       - otherwise, create mappings in both maps
// if all characters and words match the bijection rules, return true

var wordPattern = function (pattern, s) {
    const words = s.split(' ')
    // console.log(words)

    // checking if same length
    if(pattern.length !== words.length) return false

    // we need two maps
    const charToWord = new Map()
    const wordToChar = new Map()

    for (let i = 0; i < pattern.length; i++){
        const ch = pattern[i]
        const word = words[i]

        if(charToWord.has(ch)){
            // and they're not matching, return false
            if(charToWord.get(ch) !== word) return false
        } else {
            // and is mapped to a diff char, return false
            if(wordToChar.has(word)) return false
            
            // and then create map for both
            charToWord.set(ch, word)
            wordToChar.set(word, ch)
            // why two maps?
            // because we need to map a char to a word, and a word to a char
        }
    }
    
    return true
}

// time complexity: O(n), one pass
// space complexity: O(n), for two maps