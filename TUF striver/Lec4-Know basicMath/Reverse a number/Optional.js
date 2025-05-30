                            
// Declare a variable 'n' to
// store the input integer.
let n;
// Prompt the user to enter an
// integer and store it in 'n'.
n = parseInt(prompt("Enter an integer:"));
// Initialize a variable 'revNum' to
// store the reverse of the input integer.
let revNum = 0;
// Start a while loop to reverse the
// digits of the input integer.
while (n > 0) {
    // Extract the last digit of
    // 'n' and store it in 'ld'.
    let ld = n % 10;
    // Multiply the current reverse number
    // by 10 and add the last digit.
    revNum = (revNum * 10) + ld;
    // Remove the last digit from 'n'.
    n = Math.floor(n / 10);
}
// Print the reversed number.
console.log(revNum);
                            
                        