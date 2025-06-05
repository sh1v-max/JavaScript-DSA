                            
// Function to check if a
// given number is prime.
function checkPrime(n) {
  // Initialize a counter variable to
  // count the number of factors.
  let cnt = 0;
  // Loop through numbers from 1 to n.
  for (let i = 1; i <= n; i++) {
      // If n is divisible by i
      // without any remainder.
      if (n % i === 0) {
          // Increment the counter.
          cnt = cnt + 1;
      }
  }

  // If the number of
  // factors is exactly 2.
  if (cnt === 2) {
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

// Main function
function main() {
  let n = 1483;
  let isPrime = checkPrime(n);
  if (isPrime) {
      console.log(n + " is a prime number.");
  } else {
      console.log(n + " is not a prime number.");
  }
}

// Calling the main function
main();

                          
                      