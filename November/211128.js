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



function findEvenIndex(arr) {
  let left = 0;
  let right = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(i === 0){
      right = arr.slice(1).reduce((acc, cur) => acc + cur, 0);
      if(right === i){
        return i;
      }
    } else{
      left = arr.slice(0, i).reduce((acc, cur) => acc + cur, 0);
      right = arr.slice(i+1).reduce((acc, cur) => acc + cur, 0);
      if(left === right){
        return i;
      }
    }
  }
  return -1;
}


console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))
console.log(findEvenIndex([20,10,-80,10,10,15,35]))



function centry(year) {
  return Math.ceil(year/100);
  // return year/100 === Math.floor(year/100) ? year/100 : Math.floor(year/100) + 1
}


console.log(centry(1705))
console.log(centry(1900))
console.log(centry(89))



function binaryArrayToNumber(arr) {
  return Number.parseInt(arr.join(""), 2)
}


console.log(binaryArrayToNumber([0, 0, 0, 1]))
console.log(binaryArrayToNumber([0, 0, 1, 0]))
console.log(binaryArrayToNumber([1, 1, 1, 1]))



function basicOp(operation, value1, value2) {
  // if(operation === '+') return value1 + value2
  // if(operation === '-') return value1 - value2
  // if(operation === '*') return value1 * value2
  // if(operation === '/') return value1 / value2
  return eval(value1+operation+value2);
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('*', 5, 5))



function solution(str, ending) {
  return str.endsWith(ending);
  // return str.slice(str.length - ending.length, str.length) === ending
}


console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
console.log(solution('samurai', 'ai'))