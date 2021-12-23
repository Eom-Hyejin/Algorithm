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




// function nlcm (arr) {
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

function nlcm (num) {
  return num.reduce((a, b) => a * b / gcd(a, b))
}

function gcd (a, b) {
  return a % b === 0 ? b : gcd(b, a % b)
}

// 곲한 값에 최대공약수로 나누면 최소공배수

console.log(nlcm([2, 6, 8, 14]))
console.log(nlcm([1, 2, 3]))




function fib (n) {
  // let arr = [0, 1]
  // const result = (n) => {
  //   if(arr[n] !== undefined) {
  //     return n >= 2 ? arr[n] % 1234567 : arr[n]
  //   } else {
  //     arr[n] = result(n-1) + result(n-2)
  //     return n >= 2 ? arr[n] % 1234567 : arr[n]
  //   }
  // }
  // return result(n)

  let fib = [0, 1];
  for(let i=2; i<=n; i++) {
      fib[i] = (fib[i-1]+fib[i-2])%1234567;
  }
  return fib[n];
}


console.log(fib(3))
console.log(fib(5))




function makeMin (A, B) {
  A = A.sort((a, b) => a - b)
  B = B.sort((a, b) => b - a)
  // let count = 0
  // for(let i = 0; i < A.length; i++) {
  //   count += A[i] * B[i]
  // }
  // return count

  return A.reduce((total, val, idx) => total + val * B[idx], 0)
}


console.log(makeMin([1, 4, 2], [5, 4, 4]))
console.log(makeMin([1, 2], [3, 4]))