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