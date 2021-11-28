function findNextSquare(sq) {
  if(Math.sqrt(sq) === parseInt(Math.sqrt(sq))) {
    return Math.pow(Math.sqrt(sq) + 1, 2)
  } else {
    return -1
  }
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))



function addBinary(a, b) {
  return Math.abs(a+b).toString(2)
}

console.log(addBinary(1, 2))
console.log(addBinary(1, 1))
console.log(addBinary(5, 9))



function printerError(s) {
  // let arr = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  // let count = s.split("").filter((el) => arr.includes(el))
  // return `${count.length}/${s.length}`
  return `${(s.match(/[n-z]/g) || []).length}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"))
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))



function openOrSenior(data) {
  // let result = []
  // for(let i = 0; i < data.length; i++) {
  //   if(data[i][0] >= 55 && data[i][1] > 7) {
  //     result.push('Senior')
  //   } else {
  //     result.push('Open')
  //   }
  // }
  // return result
  return data.map((el) => el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open')
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))