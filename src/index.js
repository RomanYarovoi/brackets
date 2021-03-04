module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false

  pairs = bracketsConfig.map(item => item.join(''))

  let i = 0
  while (i <= pairs.length) {
    if (str.includes(pairs[i])) {
      str = str.replace(pairs[i], '')
      i = 0 
    } else { 
      i++
    }
  }
  return !str.length 
}

