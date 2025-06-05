                            
function findDivisors(n) {
  // Initialize an empty
  // array to store the divisors
  let divisors = [];

  // Iterate up to the square
  // root of n to find divisors
  // Calculate the square root of n
  let sqrtN = Math.sqrt(n);

  // Loop from 1 to the
  // square root of n
  for (let i = 1; i <= sqrtN; ++i) {
      // Check if i divides n
      // without leaving a remainder
      if (n % i === 0) {
          // Add divisor i to the array
          divisors.push(i);

          // Add the counterpart divisor
          // if it's different from i
          if (i !== n / i) {
              // Add the counterpart
              // divisor to the array
              divisors.push(n / i);
          }
      }
  }

  // Return the array of divisors
  return divisors;
}

let number = 12;
let divisors = findDivisors(number);

console.log("Divisors of " + number + " are: ");
for (let divisor of divisors) {
  console.log(divisor + " ");
}
console.log();

                          
                      