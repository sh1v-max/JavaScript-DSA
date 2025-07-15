/**
 * @param {string} s
 * @return {number}
 */

// approach: using hashmap
// when it's about counting, always think about using hashmap
// using hashmap, initialize char and freq and store in map
// create and store val in map
// iterate through map key instead of string
// and find max vowel and consonant inside map
// using ternary operator and Math.max() fn to optimize code

var maxFreqSum = function (s) {
  // creating and storing val in map
  let map = {}
  for (let i = 0; i < s.length; i++) {
      map[s[i]] = !map[s[i]] ? 1 : map[s[i]] + 1
  }

  // finding the max vowel and consonant inside the map
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let maxVowel = 0
  let maxConsonant = 0
  let mapKeys = Object.keys(map)
  for (let i = 0; i < mapKeys.length; i++) {
      if (vowels.includes(mapKeys[i])) {
          maxVowel = Math.max(maxVowel, map[mapKeys[i]])
      } else {
          maxConsonant = Math.max(maxConsonant, map[mapKeys[i]])
      }
  }
  return maxVowel + maxConsonant
};