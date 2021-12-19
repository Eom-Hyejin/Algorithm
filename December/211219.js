function solution (number) {
  let result = ""
  let num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  num.map((el, idx) => {
    while(number >= el) {
      result += roman[idx]
      number -= el
    }
  })
  return result
}

console.log(solution(1))
console.log(solution(2))
console.log(solution(10))
console.log(solution(2008))