                            
// Function to check if a
// number is an Armstrong number
function isArmstrong(num) {
  // Calculate the number of
  // digits in the given number
  const k = String(num).length;
  // Initialize the sum of digits
  // raised to the power of k to 0
  let sum = 0;
  // Copy the value of the input
  // number to a temporary variable n
  let n = num;
  // Iterate through each
  // digit of the number
  while (n > 0) {
      // Extract the last
      // digit of the number
      const ld = n % 10;
      // Add the digit raised to
      // the power of k to the sum
      sum += Math.pow(ld, k); 
      // Remove the last digit
      // from the number
      n = Math.floor(n / 10);
  }
  // Check if the sum of digits raised to
  // the power of k equals the original number
  return sum === num ? true : false;
}

// Main function to test isArmstrong function
function main() {
  const number = 153;
  if (isArmstrong(number)) {
      console.log(number + " is an Armstrong number.");
  } else {
      console.log(number + " is not an Armstrong number.");
  }
}

// Call the main function
main();
                          
                      