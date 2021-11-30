function oddOrEven(array) {
  return array.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))



function sortArray(array) {
  // let arr = array.map((el) => [el])
  // let oddNum = array.filter((el) => el % 2).sort((a, b) => a - b)
  // let result = []

  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i][0] % 2) {
  //     result.push([])
  //   } else {
  //     result.push(arr[i])
  //   }
  // }
  // for(let i = 0; i < result.length; i++) {
  //   if(result[i].length === 0) {
  //     result[i] = oddNum[0]
  //     oddNum.shift()
  //   }
  // }
  // return result.flat()
  const odd = array.filter((el) => el % 2).sort((a,b) => a - b);
  return array.map((el) => el % 2 ? odd.shift() : el);
}

console.log(sortArray([7, 1]))
console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))



function SeriesSum(n) {
  let result = 0
  let count = 1
  while(n > 0) {
    result += 1 / count
    n--
    count += 3
  }
  return result.toFixed(2)
}

console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(3))
console.log(SeriesSum(4))