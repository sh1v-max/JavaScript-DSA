// find the longest common prefix string shared amongst an array of strings
// if no common prefix, return an empty string

// approach:
// initialize a pointer to the first string in the array
// iterate over the rest of the strings in the array
// at each iteration, check if the first character of the current string
// matches the first character of the previous string
// if not, return the longest common prefix found so far
// if yes, move the pointer to the next character of the current string
// return the longest common prefix found

function longestCommonPrefix(strs) {
  let x = 0
  while (x < strs[0].length) {
    //getting the fist char of string to compare
    let ch = strs[0][x]
    for (let i = 1; i < strs.length; i++) {
      // need to handle the corner case at x == strs[i].length
      if (ch != strs[i][x] || x == strs[i].length) {
        // substring exclude indx at x
        return strs[0].substring(0, x)
      }
    }
    ++x
  }
  // whole str is prefix
  return strs[0]
}


// time complexity: O(n * m)
// space complexity: O(1)