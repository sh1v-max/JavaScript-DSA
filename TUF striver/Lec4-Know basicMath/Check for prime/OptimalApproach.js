                            
// Function to check if a
// given number is prime.
function checkPrime(n) { 

  // Initialize a counter variable to
  // count the number of factors.
  let cnt = 0;

  // Loop through numbers from 1
  // to the square root of n.
  for(let i = 1; i <= Math.sqrt(n); i++) { 

      // If n is divisible by i
      // without any remainder.
      if(n % i === 0) { 

          // Increment the counter.
          cnt = cnt + 1;

          // If n is not a perfect square,
          // count its reciprocal factor.
          if(n / i !== i) {
              cnt = cnt + 1;
          }
      }
  }

  // If the number of
  // factors is exactly 2.
  if(cnt === 2) {
       // Return true, indicating
       // that the number is prime.
      return true;
  }
  // If the number of
  // factors is not 2.
  else { 
      // Return false, indicating
      // that the number is not prime.
      return false; 
  }
}

// Test the function with a sample number.
let n = 1483;
let isPrime = checkPrime(n);
if(isPrime) {
  console.log(n + " is a prime number.");
} else {
  console.log(n + " is not a prime number.");
}

                          
                      