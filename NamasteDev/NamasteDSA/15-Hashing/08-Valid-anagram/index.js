// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/

// check is two string are anagram or not
//
// anagram: anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Examples:
// Listen and Silent are anagram of each other
// Acts and Cats are anagram of each other
// Cart and Rats are not anagram of each other

// approach: easy method
// sort both strings
// if both strings are equal, then they are anagram of each other
// else they are not anagram of each other

function isAnagram(s, t) {
  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().join('')

  return sortedS === sortedT
}

// time complexity: O(n log n)
// space complexity: O(n)

// approach 2: using 2 map
// Create two maps, map1 and map2
// map1 and map2 will store the frequency of each character in s and t respectively
// Iterate through s and t and update the frequency of each character in map1 and map2
// Then iterate through map1 and check if the frequency of each character is equal in map2
// If all the characters have equal frequency in both strings, then they are anagram of each other
// else they are not anagram of each other

function isAnagram3(s, t) {
  if (s.length !== t.length) return false
  let map1 = {}
  let map2 = {}
  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]]) {
      map1[s[i]] = 1
    } else {
      ++map1[s[i]]
    }
    if (!map2[t[i]]) {
      map2[t[i]] = 1
    } else {
      ++map2[t[i]]
    }
  }
  for (let i in map1) {
    if (map1[i] !== map2[i]) return false
  }
  return true
}

// time complexity: O(n)
// space complexity: O(1)

// another approach: using one map
// intuition:
// two strings are anagrams if they contain exactly the same characters with the same frequency
// - idea: use a hash (object) to count the frequency of each character in the first string
// - then iterate over the second string and decrement the counts
// - if a character in the second string either doesn't exist in the map or has count 0, not an anagram
// - if we successfully decrement all characters, strings are anagrams

// approach:
// if lengths of s and t are different, return false
// create empty object map
// iterate over s:
// - if character not in map, map[char] = 1
// - else, increment map[char]
// iterate over t:
// - if character not in map or map[char] === 0, return false
// - else, decrement map[char]
// return true

function isAnagram3(s, t) {
  if (s.length !== t.length) return false
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] === 0) {
      return false
    } else {
      map[t[i]]--
    }
  }
  return true
}

// time complexity: O(n)
// space complexity: O(1)
