function count (string) {
  let result = {}
  for(let i = 0; i < string.length; i++) {
    if(result[string[i]] === undefined) {
      result[string[i]] = 1
    } else {
      result[string[i]]++
    }
  }
  return result
}


console.log(count('aba'))
console.log(count(''))