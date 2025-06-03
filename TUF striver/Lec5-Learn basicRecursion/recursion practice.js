function recursion(n) {
  let i = 1
  while (i < n){
    console.log(i)
    recursion(n - 1)
    i++
  }
}
recursion(3)

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