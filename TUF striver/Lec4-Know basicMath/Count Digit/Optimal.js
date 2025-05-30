                            
// Calculate the count of digits in 'n'
// using logarithmic operation log10(n) + 1.
function countDigits(n) {
  // Initialize a variable 'cnt' to
  // store the count of digits.
  let cnt = Math.floor(Math.log10(n) + 1);

  // The expression Math.floor(Math.log10(n) + 1)
  // calculates the number of digits in 'n'
  // and rounds it down to the nearest whole number.

  // Adding 1 to the result accounts
  // for the case when 'n' is a power of 10,
  // ensuring that the count is correct.

  // Return the count of digits in 'n'.
  return cnt;
}

let N = 329823;
console.log("N: " + N);
let digits = countDigits(N);
console.log("Number of Digits in N: " + digits);
                          
                      