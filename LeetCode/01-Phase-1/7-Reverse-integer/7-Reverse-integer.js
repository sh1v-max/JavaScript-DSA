/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rev = 0;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x !== 0) {
    const digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.floor(x / 10);
  }
  const result = sign * rev;
  if (result > 2 ** 31 - 1 || result < -(2 ** 31)) return 0;
  return result;
}