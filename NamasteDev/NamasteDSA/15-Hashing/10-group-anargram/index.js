// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

// to return the group of words that are anagram of each other
// an anagram is a word or phrase formed by rearranging the letters of a different word or phrase,

// sorted key
// intuition:
// two words are anagrams if they contain the same characters in any order
// - idea: sort each word alphabetically — all anagrams will produce the same sorted string
// - example: "eat", "tea", "ate", all become "aet"
// - use this sorted string as a key in a hash map (object)
// - group all words that share the same key

// approach:
// create an empty object `res = {}`
// iterate over each word in strs
// - sort the word alphabetically, sortedWord
// - if sortedWord not in res, create res[sortedWord] = [word]
// - else, push word into res[sortedWord]
// return all grouped values, Object.values(res)

function groupAnagrams(strs) {
  const res = {}

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split('').sort().join('')
    // if it's not in map, create a new key
    if (!res[sortedWord]) {
      res[sortedWord] = [strs[i]]
    }
    // if it's in map, add word to that key
    else {
      res[sortedWord].push(strs[i])
    }
  }
  // console.log(res)
  return [...Object.values(res)]
}

// time complexity: O(n * m log m)
// where n is the number of words in the input list and m is the length of the longest word
// it take m log n time to sort the word
// space complexity: O(n m)

// approach 2: creating hashed key
// To group the anagrams, we'll use a hashmap to store the anagrams
// We'll loop through the input array and for each word,
// we'll create an array that counts the frequency of each letter in the word
// Then, we'll convert that frequency array into a unique string key
// We'll use this string key to group the anagrams
// Finally, we'll return all the grouped values

// creating a whole big string like a2b0c0d0e0f0g1h0i0j0k0l0m1n1o0p0q0r1s0t0u0v0w0x0y0z0
// and not as a2n1g1r1m1 because then we again need to sort it
// which will take m log n

function groupAnagrams(strs) {
  let map = {}

  // loop through the input array and for each word
  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0)
    let s = strs[i]

    // count the frequency of each letter in the word
    for (let j = 0; j < s.length; j++) {
      // getting the index where we need to add
      let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0)
      freqArr[index]++
    }

    // convert the frequency array into a unique string key
    let key = ''
    for (let k = 0; k < 26; k++) {
      // key = key + String.fromCharCode(k) + freqArr[k]
      // can also do this to store key with alphabets
      // but those are just to identify
      key += '#' + freqArr[k]
    }

    // group the anagrams
    if (!map[key]) {
      map[key] = [s]
    } else {
      map[key].push(s)
    }
  }

  // return all the grouped values
  return Object.values(map)
}

// time complexity: O(n * m)
// where n is the number of words in the input list and m is the length of the longest word
// space complexity: O(n m)
