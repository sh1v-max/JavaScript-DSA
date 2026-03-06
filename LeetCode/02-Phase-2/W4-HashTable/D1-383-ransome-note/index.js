// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/

// intuition:
// we are given two string: ransomNote and magazine
// the goal is to check whether ransomNote can be constructed using the letters from magazine
// each char can only be used once
// so the core idea is frequency
// if ransomNote requires some character 'c' k times,
// then magazine must contain at least k occurrences of 'c'
// the simplest way to verify this is by counting chars using hash table, freq map
// we count how many times each character appears
// in ransomNote and in magazine
// then we check whether magazine has enough characters
// to satisfy ransomNote

// approach:
// create a frequency map for ransomNote
// create a frequency map for magazine
// iterate through ransomNote frequency map:
//   for each character
//   check if magazine frequency contains it
//   and ensure magazineCount >= ransomNoteCount
// if any character fails the check, return false
// otherwise ransomNote can be constructed

var canConstruct = function (ransomNote, magazine) {
  let ransomMap = {}
  let magazineMap = {}

  // building frequency maps
  for (let char of ransomNote) {
    ransomMap[char] = (ransomMap[char] || 0) + 1
  }

  for (let char of magazine) {
    magazineMap[char] = (magazineMap[char] || 0) + 1
  }

  // checking if ransomNote can be constructed
  for (let char in ransomMap) {
    if (!magazineMap[char] || ransomMap[char] > magazineMap[char]) {
      return false
    }
  }

  return true
}


// time complexity:
// building ransomNote map: O(n)
// building magazine map: O(m)
// checking characters: O(26) at most
// total: O(n + m)
//
// space complexity: O(26), since only lowercase english letters


// -----------------------------------------------------------
// optimized solution

// intuition:
// instead of building two hash maps,
// we only need to track the available characters in magazine
// we count the frequency of magazine characters first
// then we iterate through ransomNote
// and "consume" characters from the map
// if a required character does not exist
// or its count becomes negative,
// it means magazine does not have enough letters

// approach:
// build frequency map for magazine
// iterate through ransomNote:
//   if character not present in map, return false
//   decrease its count
// if all characters are satisfied, return true

var canConstruct = function(ransomNote, magazine) {

  let map = {}

  // count characters in magazine
  for (let char of magazine) {
    map[char] = (map[char] || 0) + 1
  }

  // try to build ransomNote
  for (let char of ransomNote) {

    if (!map[char]) {
      return false
    }

    map[char]--
  }

  return true
}

// time complexity:
// building frequency map, O(m)
// checking ransomNote, O(n)
// total, O(n + m)
//
// space complexity, O(26)