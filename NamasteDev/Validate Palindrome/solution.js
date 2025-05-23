function validatePalindrome(str) {
  // Your implementation
  let newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let revStr = ''
  for (let i = newStr.length - 1; i >= 0; i--) {
      revStr += newStr[i]
      console.log(revStr)
  }
  console.log(str)
  console.log(newStr)
  console.log(revStr)
  if (newStr === revStr) {
      return true
  } else { 
      return false
  }
}

//For the purpose of user debugging.
validatePalindrome("Race a car");

module.exports = validatePalindrome