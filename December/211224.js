function change124 (n) {
  // let numbers = ['4', '1', '2']
  // let result = ''
  // while(n > 0) {
  //   result = numbers[n % 3] + result
  //   n = (n%3 === 0) ? n/3 - 1 : Math.floor(n/3)
  // }
  // return result

  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}


console.log(change124(1))
console.log(change124(2))
console.log(change124(3))
console.log(change124(4))

