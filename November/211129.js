function isPangram (string) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('')
  .every((x) => string.toLowerCase().includes(x));
  
  // string = string.toUpperCase().replace(/(\s*)/g, "")
  // let regex = /[^A-Z]/g
  // string = string.replace(regex, "")
  // let obj = {}
  // for(let i = 0; i < string.length; i++) {
  //   if(obj[string[i]] === undefined) {
  //     obj[string[i]] = 1
  //   } else {
  //     obj[string[i]]++
  //   }
  // }
  // return Object.keys(obj).length === 26
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"))