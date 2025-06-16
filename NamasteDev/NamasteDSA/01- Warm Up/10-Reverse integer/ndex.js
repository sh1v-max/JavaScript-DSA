// a program to reverse a number

function reverseNumber(n) {
  let rev = 0
  while (n > 0) {
    let rem = n % 10
    rev = rev * 10 + rem
    n = Math.floor(n / 10)
  }
  return rev
}

// console.log(reverseNumber(259)); // 952

// above solution is not working for negative numbers

function reverseNumber1(x) {
  let copy = x
  x = Math.abs(x)

  let rev = 0
  while (x > 0) {
    let last = x % 10
    rev = rev * 10 + last
    x = Math.floor(x / 10)
  }
  // if (copy < 0) {
  //   return -rev
  // } else {
  //   return rev
  // }

  let limit = Math.pow(2, 31)
  if (rev > limit - 1 || rev < -limit + 1) {
    return 0
  }
  
  return copy < 0 ? -rev : rev
}


console.log(reverseNumber1(-259));
console.log(reverseNumber(259));
