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



// 정규표현식 공부 다시하기!!!!!

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}


console.log(validatePIN("1234"))
console.log(validatePIN("12345"))
console.log(validatePIN("a234"))
console.log(validatePIN("1.234"))
console.log(validatePIN("12.0"))
console.log(validatePIN("82771g"))
console.log(validatePIN("0000"))




function tribonacci(signature, n) {
  if(n === 0) return []
  if(n <= 3) return signature.slice(0, n)
  for(let i = 2; i < n-1; i++) {
    signature.push(signature[i-2] + signature[i-1] + signature[i])
  }
  return signature
}


console.log(tribonacci([1, 1, 1], 10))
console.log(tribonacci([0, 0, 1], 10))
console.log(tribonacci([1, 1, 1], 1))


function toCamelCase(str){
  if (str.includes('-')) {
    return makeStr(str, '-')
  } else {
    return makeStr(str, '_')
  }
}

function makeStr(str, mark) {
  str = str.split(mark)
  str = str.map((el, idx) => {
    if(idx >= 1) {
      el = el.split("")
      el[0] = el[0].toUpperCase()
      return el.join("")
    } else {
      return el
    }
  })
  return str.join("")
}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))