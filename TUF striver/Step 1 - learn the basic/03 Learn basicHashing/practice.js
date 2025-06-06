// this is how we take input from user
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your name: ", function(name) {
//   console.log("Hello, " + name);
//   rl.close();
// });

// ? number of occurrences of a character in an array
const arr = [2, 3, 2, 4, 3, 2, 5];

const hash = {};

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];

  if (hash[num] === undefined) {
    hash[num] = 1;
  } else {
    hash[num]++;
  }
}

// console.log(hash);

function sum(a, b){
  return a * b
}

console.log(sum(2002315325531111111111111111111111111111111111111113252352151323150000,30023554313213532152315325314531245123521523521300000));
console.log(1e21 + 1);  // prints 1e21, not 1e21+1, because precision lost
console.log(0.1 + 0.2); // prints 0.30000000000000004, showing floating-point error
