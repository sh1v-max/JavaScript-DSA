// given a string, consider only alphanumeric char
// and check if it's a valid palindrome or not
// return true or false

// approach: using extra space
// check for alphanumeric chars, lowercase all
// check for palindrome using split().reverse().join()

function isPalindrome(s) {
  s = s.toLowerCase()
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/)) {
      str += s[i]
    }
  }
  let rev = str.split('').reverse().join('')
  return str === rev
}

// can also get rev in for loop
function isPalindrome(s) {
  s = s.toLowerCase()
  let str = ''
  let rev = ''
  for (let i = 0; i < s.length; i++) {
    // if (s[i].match(/[a-z0-9]/))
    if (
      (s[i].charCodeAt() >= 'a'.charCodeAt() &&
        s[i].charCodeAt() <= 'z'.charCodeAt()) ||
      (s[i].charCodeAt() >= '0'.charCodeAt() &&
        s[i].charCodeAt() <= '9'.charCodeAt())
    ) {
      str = str + s[i]
      rev = s[i] + rev
    }
  }
  return str === rev
}

// time complexity: O(n)
// space complexity: O(n)
// because we're creating new string to store value

// approach: without extra space, or two pointers
// convert to lowercase
// initialize two pointers left and right
// check for palindrome using while loop being left < right
// write conditions to skip non alphanumeric, move pointers
// compare char at both pointers, if not equal, return false, else continue moving
// increment left and decrement right
// if are equal, return true

function isPalindrome(s) {
  s = s.toLowerCase()
  let l = 0
  let r = s.length - 1
  while (l < r) {
    if (!s[l].match(/[a-z0-9]/)) {
      l++
    } else if (!s[r].match(/[a-z0-9]/)) {
      r--
    } else if (s[l] === s[r]) {
      l++, r--
    } else {
      return false
    }
  }
  return true
}

// time complexity: O(n)
// space complexity: O(1) no extra space