                            
// Function to check if a
// given integer is a palindrome
function palindrome(n) {
  // Initialize a variable to
  // store the reverse of the number
  let revNum = 0;
  // Create a duplicate variable to
  // store the original number
  let dup = n;
  // Iterate through each digit of
  // the number until it becomes 0
  while (n > 0) {
      // Extract the last
      // digit of the number
      let ld = n % 10;
      // Build the reverse number
      // by appending the last digit
      revNum = (revNum * 10) + ld;
      // Remove the last digit
      // from the original number
      n = Math.floor(n / 10);
  }
  // Check if the original number
  // is equal to its reverse
  if (dup == revNum) {
      // If equal, return true
      // indicating it's a palindrome
      return true;
  } else {
      // If not equal, return false
      // indicating it's not a palindrome
      return false;
  }
}

// Main function
function main() {
  let number = 4554;

  if (palindrome(number)) {
      console.log(number + " is a palindrome.");
  } else {
      console.log(number + " is not a palindrome.");
  }
}

// Calling the main function
main();
                          
                      