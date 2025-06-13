// Loops are used to **run the same block of code repeatedly** with different values.

// **`for` Loop**
// Used when you know how many times you want to loop.
for (let i = 0; i < 5; i++) {
  console.log(i);  // prints 0 to 4
}

// **`while` Loop**
// Used when you don’t know how many times you'll loop in advance.
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// **`do...while` Loop**
// Same as `while`, but the code block is executed at least once.
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// **`for...in` Loop**
// Used to loop over the **keys** of an object.
const person = { name: "Wazir", age: 23 };
for (const key in person) {
  console.log(key);  // prints name and age
}

// **`for...of` Loop**
// Used to loop over the **values** of an object or array.
const numbers = [1, 2, 3];
for (const number of numbers) {
  console.log(number);  // prints 1, 2, 3
}

// =====================================================
// examples
// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let arr = [10, 5, 7, 0, 3, 8, 80]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// all even numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// sum
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// while
let a = 0
while (a < 5) {
  console.log(`hello ${a}`);
  a++
}