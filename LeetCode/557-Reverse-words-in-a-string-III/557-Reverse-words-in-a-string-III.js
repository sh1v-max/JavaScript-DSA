/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let words = s.split(' ')
  let revWords = []

  for (let i = 0; i < words.length; i++) {
    let reversed = words[i].split('').reverse().join('')
    revWords.push(reversed)
  }

  return revWords.join(' ')
}
