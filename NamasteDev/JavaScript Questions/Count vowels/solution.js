function countVowels(str) {
  // Your implementation
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
      if (vowels.includes(char)) {
          count++;
      }
  }

  return count;
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels