let d = ['hello', 'hellu', 'hell']

var longestCommonPrefix = function (strs) {
  let p = ''
  let stop = false

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        stop = true
        break
      }
    }

    if (stop) break
    p += char
  }

  if (p === '') {
    return ''
  } else {
    return p
  }
}
