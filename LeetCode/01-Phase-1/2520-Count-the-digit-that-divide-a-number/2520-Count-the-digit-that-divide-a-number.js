/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  let result = 0;
  let arr = num.toString().split('');
  for(let i = 0; i < arr.length; i++) {
      if(num % (+arr[i]) == 0) {
          result += 1
      }
  }
  return result
};