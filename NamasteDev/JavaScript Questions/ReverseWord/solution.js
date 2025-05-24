function reverseWords(sentence) {
  // Your implementation
  const res = sentence.split(/(\s+)/)
  return res.map(word => {
      res = [...word].reverse().join('')
      return res
  })
}

//For the purpose of user debugging.
reverseWords("Hello World");
module.exports = reverseWords