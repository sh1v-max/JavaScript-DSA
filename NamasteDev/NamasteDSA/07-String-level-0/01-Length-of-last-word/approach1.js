// Given a string s consisting of words and spaces, return the length of the last word in the string

// approach: two loop
// trim all the spaces
// start from the end till you find first space
// count character and return the count, that will be length of last word

function lengthOfLastWord(s) {
  let n = s.length - 1
  while (n >= 0){
      if(s[n] == " "){
          n--
      } else {
          break
      }
  }

  let count = 0
  while (n >= 0) {
      if(s[n] != " "){
          count++
          n--
      }else{
          break
      }
  }
  return count
}


// time complexity: O(n)
// space complexity: O(1)
