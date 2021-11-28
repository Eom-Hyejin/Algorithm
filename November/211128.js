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