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




// function solution (arr) {
//   let result = []
//   while(arr.length > 0) {
//     let pop = arr.shift()
//     if(result.length === 0) {
//       result.push(lcm(pop, arr[0]))
//     } else {
//       let shift = result.shift()
//       result.push(lcm(pop, shift))
//     }
//   }
//   return result[0]
// }

// function lcm(a, b) {
//   return a * b / gcd(a, b)
// }

// function gcd(a, b) {
//   return a % b === 0 ? b : gcd(b, a % b)
// }

function solution (num) {
  return num.reduce((a, b) => a * b / gcd(a, b))
}

function gcd (a, b) {
  return a % b === 0 ? b : gcd(b, a % b)
}

console.log(solution([2, 6, 8, 14]))
console.log(solution([1, 2, 3]))

