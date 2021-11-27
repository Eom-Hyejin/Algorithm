function rowSumOddNumbers(n) {
  let sum = n * (n - 1) 
  let result = 0
  for(let i = 1; i <= n; i++) {
    result += sum + i + (i -1)
  }  
  return result
  // return n*n*n
}

console.log(rowSumOddNumbers(1))
console.log(rowSumOddNumbers(4))


function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}


console.log(validatePIN("1234"))
console.log(validatePIN("12345"))
console.log(validatePIN("a234"))
console.log(validatePIN("1.234"))
console.log(validatePIN("12.0"))
console.log(validatePIN("82771g"))
console.log(validatePIN("0000"))
