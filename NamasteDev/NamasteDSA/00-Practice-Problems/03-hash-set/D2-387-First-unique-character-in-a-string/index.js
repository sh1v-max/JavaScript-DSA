// 387-first-unique-character-in-a-string
// https://leetcode.com/problems/first-unique-character-in-a-string/

// intuition:
// we are given a string s and we need to return the index
// of the first character that does not repeat
// when we encounter a character for the first time,
// we cannot immediately know whether it will appear again later
// so we first need to count the frequency of all characters
// once we know the frequency of each character,
// we can scan the string again and return the first index
// whose frequency is exactly 1
// this naturally leads to using a hash table (frequency map)

// approach:
// create a frequency map
// first pass:
//   iterate through the string and count occurrences of each character
// second pass:
//   iterate through the string again
//   check if frequency of current character == 1
//   if yes, return its index
// if no unique character is found, return -1

var firstUniqChar = function(s) {

  const map = {}

  // count frequency of characters
  for (let char of s) {
    map[char] = (map[char] || 0) + 1
  }

  // find first unique character
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i
    }
  }

  return -1
}

// time complexity:
// first pass -> O(n)
// second pass -> O(n)
// total -> O(n)
//
// space complexity -> O(26)
// since only lowercase english letters


// ------------------------------------------------------
// optimized solution (using array instead of hash map)

// intuition:
// since the string contains only lowercase english letters,
// we can use an array of size 26 instead of a hash map
// each index represents a character:
// index 0 -> 'a'
// index 1 -> 'b'
// ...
// index 25 -> 'z'
// this reduces hashing overhead and makes operations faster

// approach:
// create an array of size 26
// first pass:
//   count frequency of characters using charCodeAt
// second pass:
//   check which character has frequency 1
//   return its index
// if none found -> return -1

var firstUniqChar = function(s) {

  const count = new Array(26).fill(0)

  // count frequency
  for (let char of s) {
    count[char.charCodeAt(0) - 97]++
  }

  // find first unique character
  for (let i = 0; i < s.length; i++) {
    if (count[s[i].charCodeAt(0) - 97] === 1) {
      return i
    }
  }

  return -1
}

// time complexity:
// O(n)

// space complexity:
// O(1) since array size is fixed (26)