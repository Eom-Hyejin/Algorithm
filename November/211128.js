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