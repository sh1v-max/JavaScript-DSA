function detectType(value) {
  // Your implementation
  if (value === null) { 
      console.log('null')
      return 'null'
  }
  if (Array.isArray(value)) {
      console.log('array')
      return 'array'
  }
  const val = typeof value
  console.log(val)
  return val
}

//For the purpose of user debugging.
detectType("hello");
detectType(['val'])
detectType(null)

module.exports = detectType