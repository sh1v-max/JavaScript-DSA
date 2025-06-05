                            
function findGcd(n1, n2) {
  // Initialize gcd to 1
  let gcd = 1;

  // Iterate from 1 up to
  // the minimum of n1 and n2
  for (let i = 1; i <= Math.min(n1, n2); i++) {
      // Check if i is a common
      // factor of both n1 and n2
      if (n1 % i === 0 && n2 % i === 0) {
          // Update gcd to the
          // current common factor i
          gcd = i;
      }
  }

  // Return the greatest
  // common divisor (gcd)
  return gcd;
}

// Main function
function main() {
  let n1 = 20, n2 = 15;
  
  // Find the GCD of n1 and n2
  let gcd = findGcd(n1, n2);

  console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);
}

// Call the main function
main();


                          
                      