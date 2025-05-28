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
}/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
      const charCode = s.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
          res += String.fromCharCode(charCode + 32);
      } else {
          res += s[i];
      }
  }
  return res;
};