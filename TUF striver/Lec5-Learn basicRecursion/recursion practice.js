function recursion(n) {
  let i = 1
  while (i < n) {
    console.log(i)
    recursion(n - 1)
    i++
  }
}
// recursion(3)

// ? just a random test
function num(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
    num(n - 1)
  }
}

// num(4)

// ======================================================================
//? print 1 - n
let count = 1
function num2(n) {
  if (n === 0) {
    return
  }
  num2(n - 1)
  console.log(count)
  count++
}

// num2(10)
// num2(10)

// ? another approach
function printHello(n, count = 1) {
  if (count > n) {
    return
  }
  console.log(count)
  printHello(n, count + 1)
}

// printHello(10)

// ======================================================================
// ? print something n times
function num3(n) {
  if (n === 0) {
    return
  }
  console.log('hello')
  num3(n - 1)
}

// num3(10 )

// ? another approach
function printHello(n, count = 1) {
  if (count > n) {
    return
  }
  console.log('hello')
  printHello(n, count + 1)
}

// printHello(10)

// =====================================================================================
// ? factorial of a number
function fact(n) {
  if (n === 0) {
    return 1
  }
  let factorial = n * fact(n - 1)
  // console.log(factorial)
  return factorial
}

function fact2(n) {
  if (n === 0) {
    return 1
  }
  return n * fact2(n - 1)
}

function fact3(n, acc = 1) {
  if (n === 0) return acc
  return fact3(n - 1, n * acc)
}

// const factorial = fact(4)
// console.log(factorial)

// =====================================================================================
// ? reverse an array

function revArr0(arr) {
  return arr.reverse()
}

function revArr(arr) {
  let rev = []
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i])
  }
  return rev
}

// console.log(revArr([1,2,3,4,5]))

// no return, reversing the original array
function revArr2(arr) {
  const n = arr.length
  let res = new Array(n)

  for (let i = n - 1; i >= 0; i--) {
    res[n - i - 1] = arr[i]
  }

  for (let i = 0; i < n; i++) {
    arr[i] = res[i]
  }
}

// another approach
function revArr3(arr) {
  let n = arr.length;
  let res = new Array(n);
  let j = 0
  for (let i = n - 1; i >= 0; i--) {
    res[j] = arr[i]
    j++
  }
  return res
}

// two pointer approach
function revArr4(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap arr[left] and arr[right]
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr
}

// recursion
function revArr5(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    revArr5(arr, left + 1, right - 1)
  }
  return arr
}

const arr = [1, 2, 3, 4, 5]
console.log(revArr5(arr))
// console.log(arr)

//==============================================================================
// ? fibonacci series

function fib(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

// console.log(fib(5))