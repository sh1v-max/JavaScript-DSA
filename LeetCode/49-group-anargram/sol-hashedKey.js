/**
 * @param {string[]} strs
 * @return {string[][]}
 */


// approach 2: creating hashed key
// To group the anagrams, we'll use a hashmap to store the anagrams
// We'll loop through the input array and for each word,
// we'll create an array that counts the frequency of each letter in the word
// Then, we'll convert that frequency array into a unique string key
// We'll use this string key to group the anagrams
// Finally, we'll return all the grouped values

var groupAnagrams = function (strs) {
  let map = {}

  // loop through the input array and for each word
  for (let i = 0; i < strs.length; i++) {
      let freqArr = Array(26).fill(0)
      let s = strs[i]

      // count the frequency of each letter in the word
      for (let j = 0; j < s.length; j++) {
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
  return [...Object.values(map)]
};

// time complexity: O(n * m)
// where n is the number of words in the input list and m is the length of the longest word
// space complexity: O(n m)