function capitalizeWords(sentence) {
  // Your implementation
  const words = sentence.trim().split(/\s+/)
  const net = words.map(word => {
      const net = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      console.log(net)
      return net
  })
  let res = net.join(' ')
  console.log(res)
  return res
}

//For the purpose of user debugging.
capitalizeWords("hello world");
module.exports = capitalizeWords