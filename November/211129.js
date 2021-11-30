function isPangram(string) {
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



function divisors(integer) {
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



function isPrime(num) {
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



function comp(array1, array2) {
  if(array1 === null || array2 === null) return false;
  array1 = array1.sort((a, b) => a - b).map((el) => Math.pow(el, 2))
  array2 = array2.sort((a, b) => a - b)

  return array1.every((ele, idx) => ele === array2[idx])
}


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], 
  [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))

console.log(comp([ 121, 144, 19, 161, 19, 144, 19, 11, 1008 ], [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ]))