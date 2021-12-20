function checkX (board) {
  let numX = []
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(numX.includes(board[i][j])) {
        return false
      }
      numX.push(board[i][j])
    }
    numX = []
  }
  return true
}

function checkY (board) {
  let numY = []
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(numY.includes(board[j][i])) {
        return false
      }
      numY.push(board[j][i])
    }
    numY = []
  }
  return true
}

function checkS (board) {
  let x = 0
  let y = 0
  let count = 0
  let numS = []

  while (x < 9) {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(numS.includes(board[x + i][y + j])) {
          return false
        }
        numS.push(board[x + i][y + j])
      }
    }
    numS = []
    if(count === 2) {
      x += 3
      y = 0
      count = 0      
    } else {
      y += 3
      count++
    }
  }
  return true
}

function validSolution (board) {
  return checkX(board) && checkY(board) && checkS(board) 
}


console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]))

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]))




function firstNonConsecutive (arr) {
  if(arr[0]+arr.length-1 === arr[arr.length-1]) {
    return null
  }
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]+1 !== arr[i+1]) {
      return arr[i+1]
    }
  }
}


console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6]))