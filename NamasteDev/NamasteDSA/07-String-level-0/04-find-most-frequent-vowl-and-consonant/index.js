// find the most frequent vowel and consonant in a string
// return sum of both

// when it's about counting, always think about using hashmap

// approach
// using hashmap, initialize char and freq and store in map

function MaxFreqSum(s) {
  // creating and storing val in map
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
  }

  // finding the max vowel and consonant inside the map
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let maxVowel = 0
  let maxConsonant = 0
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (map[s[i]] > maxVowel) {
        maxVowel = map[s[i]]
      }
    } else {
      if (map[s[i]] > maxConsonant) {
        maxConsonant = map[s[i]]
      }
    }
  }
  return maxVowel + maxConsonant
}

// optimization
// instead of iterating through the string, iterate through the map
// doing this we can only decrease the number of iteration, not a major optimization

function MaxFreqSum(s) {
  // creating and storing val in map
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
  }

  // finding the max vowel and consonant inside the map
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let maxVowel = 0
  let maxConsonant = 0
  let mapKeys = Object.keys(map)
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      if (map[mapKeys[i]] > maxVowel) {
        maxVowel = map[mapKeys[i]]
      }
    } else {
      if (map[mapKeys[i]] > maxConsonant) {
        maxConsonant = map[mapKeys[i]]
      }
    }
  }
  return maxVowel + maxConsonant
}

// optimizing code further
// write some logic in one line
// using ternary operator instead of if-else
// using Math.max() instead of manually comparing and storing

function MaxFreqSum(s) {
  // creating and storing val in map
  let map = {}
  for (let i = 0; i < s.length; i++) {
    // if(!map[s[i]]){
    //   map[s[i]] = 1
    // } else {
    //   map[s[i]]++
    // }
    // using ternary operator to write above condition in one line
    map[s[i]] = !map[s[i]] ? 1 : map[s[i]] + 1
  }

  // finding the max vowel and consonant inside the map
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let maxVowel = 0
  let maxConsonant = 0
  let mapKeys = Object.keys(map)
  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(s[i])) {
      maxVowel = Math.max(maxVowel, map[mapKeys[i]])
      // if (ma[mapKeys[i]] > maxVowel) {
      //   maxVowel = map[mapKeys[i]]
      // }
    } else {
      maxConsonant = Math.max(maxConsonant, map[mapKeys[i]])
      // if (map[mapKeys[i]] > maxConsonant) {
      //   maxConsonant = map[mapKeys[i]]
      // }
    }
  }
  return maxVowel + maxConsonant
}


// time complexity: O(n)
// space complexity: O(1)

// note:
// space complexity is O(1) because we are storing key and val in map
// which is always going to be 26, because they are characters in english
// same in case of time complexity for the second loop, the optimized one
// because we are iterating through map key, which is, again, 26 so O(1)