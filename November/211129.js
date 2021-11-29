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



function divisors (integer) {
  let result = []
  for(let i = 2; i < integer; i++) {
    if(integer % i === 0) {
      result.push(i)
    }
  }
  return result.length === 0 ? `${integer} is prime` : result
}


console.log(divisors(15))
console.log(divisors(12))
console.log(divisors(13))



function isPrime (num) {
  if(num <= 1) {
    return false;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
  return true; 
}


console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(75))
console.log(isPrime(-5))
console.log(isPrime(-8))
console.log(isPrime(45))