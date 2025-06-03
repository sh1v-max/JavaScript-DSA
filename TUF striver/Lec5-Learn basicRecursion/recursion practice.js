function recursion(n) {
  let i = 1
  while (i < n){
    console.log(i)
    recursion(n - 1)
    i++
  }
}
// recursion(3)

// ? just a random test
function num(n) {
  for(let i = 1; i <= n; i++){
    console.log(i)
    num(n - 1)
  }
}

// num(4)

// ======================================================================
//? print 1 - n
let count = 1
function num2(n) {
  if(n === 0) {
    return
  }
  num2(n-1)
  console.log(count)
  count++
}

// num2(10)
// num2(10)

// ? another approach
function printHello(n, count = 1){
  if(count > n) {
    return
  }
  console.log(count)
  printHello(n, count + 1)
}

// printHello(10)

// ======================================================================
// ? print something n times
function num3(n ) {
  if(n === 0) {
    return
  }
  console.log('hello')
  num3(n-1 )
}

// num3(10 )

// ? another approach
function printHello(n, count = 1){
  if(count > n) {
    return
  }
  console.log('hello')
  printHello(n, count + 1)
}

// printHello(10)

// =====================================================================================
// ? factorial of a number
function fact(n) {
  if(n === 0) {
    return 1
  }
  let factorial = n * fact(n - 1)
  // console.log(factorial)
  return factorial
}

function fact2(n) {
  if(n === 0) {
    return 1
  }
  return n * fact2(n - 1)
}

function fact3(n, acc = 1) {
  if (n === 0) return acc;
  return fact3(n - 1, n * acc);
}

// const factorial = fact(4)
// console.log(factorial)

// =====================================================================================
// ? reverse an array
function revArr (arr) {
  let rev = []
  for (let i = arr.length - 1; i >= 0; i--){
    rev.push(arr[i])
  }
  console.log(rev)
  return rev
}

// revArr([1,2,3,4,5])

function revArr2 (arr, n){
  let res = new Array(n)

  for(let i = n -1; i >= 0; i--){
      res[n-i-1] = arr[i]
  }

  for (let i = 0; i < n; i++){
      arr[i] = res[i]
  }
  return  
}

const n = 5;
const arr = [5, 4, 3, 2, 1];
console.log(revArr2(arr, n))