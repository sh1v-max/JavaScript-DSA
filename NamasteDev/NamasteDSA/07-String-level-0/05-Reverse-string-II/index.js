// revers the first k char for every 2k char in string
// if there are less than k char in string, reverse the whole string
// if less than 2k but more or equal to k, reverse first k and leave rest as it is

// note:
// strings are immutable, and to change or reverse in string, we need to convert string into array
// s.split('') => convert string into array
// work on array, mutate it
// s.join() => convert array back to string
let s = 'hello'
function strArr(s) {
  console.log(s) // hello
  s = s.split('')
  console.log(s) // ['h', 'e', 'l', 'l', 'o']
  s = s.join('')
  console.log(s) // hello
}

strArr(s)

// simple reverse
// let s = "hello"
// let rev = s.split('').reverse().join('')
// console.log(rev) // olleh

// using half loop
function revStr(s) {
  s = s.split('')
  let n = s.length
  let mid = Math.floor(s.length / 2)
  for (let i = 0; i < mid; i++) {
    // swap(s[i], s[n-i-1])
    let temp = s[i]
    s[i] = s[n - 1 - i]
    s[n - 1 - i] = temp
  }
  return s.join('')
}
const rev = revStr(s)
console.log(rev)

// approach:
// convert string in char array
// iterate over the array in steps of 2k
// at each step, reverse the first k char
// if there are less than k char in string, reverse the whole string
// join and return

function reverseStr(s, k) {
  s = s.split('')
  // jumping k times, because we need to reverse every 2k
  for (let x = 0; x < s.length; x = x + (2 * k)) {
    // reverse the first k elem starting from x
    let n = k
    let mid = Math.floor(n / 2)
    for (let i = 0; i < mid; i++) {
      let temp = s[x + i]
      s[x + i] = s[x + n - 1 - i]
      s[x + n - 1 - i] = temp
    }
  }
  return s.join('')
}
let str = "abcdefg"
const rev2 = reverseStr(str, 2)
console.log(rev2)