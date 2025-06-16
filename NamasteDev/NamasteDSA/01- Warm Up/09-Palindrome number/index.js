// a program to reverse a number

function reverseNumber(n) {
  let rev = 0
  while (n > 0) {
    let rem  = n % 10
    rev = (rev * 10) + rem
    n = Math.floor(n /10)
  }
  return rev
}

// console.log(reverseNumber(259)); // 952

// now, code to check if a number is palindrome or not

function isPalindrome(n) {
  if (n < 0) return false;
  let temp = n
  let rev = 0
  while (n > 0) {
    let rem = n % 10
    rev = (rev * 10) + rem
    n = Math.floor(n / 10)
  }
  return rev === temp
}

console.log(isPalindrome(121)); // true