// function to check if a number is a power of two

function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  if (n % 2 !== 0 || n === 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(16));