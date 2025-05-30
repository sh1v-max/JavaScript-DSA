                            
function findGcd(n1, n2) {
  // Iterate from the minimum of
  // n1 and n2 down to 1
  // Start from the minimum of n1 and n2
  // because the GCD cannot
  // exceed the smaller number
  for (let i = Math.min(n1, n2); i > 0; i--) {
      // Check if i is a common
      // factor of both n1 and n2
      if (n1 % i === 0 && n2 % i === 0) {
          // If i is a common factor,
          // return it as the GCD
          return i;
      }
  }
  // If no common factors are found,
  // return 1 (as 1 is always a
  // divisor of any number)
  return 1;
}

let n1 = 20, n2 = 15;

// Find the GCD of n1 and n2
let gcd = findGcd(n1, n2);

console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);

                          
                      