/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false
  let char = new Array(26).fill(false);
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
      let charCode = sentence.charCodeAt(i) - 97;

      if (charCode >= 0 && charCode < 26 && !char[charCode]) {
          char[charCode] = true;
          count++;
      }

      if (count === 26) return true;
  }

  return false;
};