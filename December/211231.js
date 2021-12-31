function findSquare (board) {
  let result = 0
  const row = board.length
  const column = board[0].length

  if(row <= 1 || column <= 1) return 1

  for(let i = 1; i < row; i++) {
    for(let j = 1; j < column; j++) {
      if(board[i][j] > 0) {
        const up = board[i-1][j]
        const left = board[i][j-1]
        const cross = board[i-1][j-1]
        board[i][j] = Math.min(up, left, cross) + 1
        result = Math.max(result, board[i][j])
      }
    }
  }
  return result * result
}


console.log(findSquare([[0,1,1,1]
                      ,[1,1,1,1]  
                      ,[1,1,1,1]
                      ,[0,0,1,0]]), 9)
console.log(findSquare([[0,0,1,1],
                        [1,1,1,1]]), 4)




function makeMax (numbers) {
  // const numbersString = numbers.map((num) => String(num));
  // numbersString.sort((a, b) => {
  //   return parseInt(b + a) - parseInt(a + b);
  // })
  // const answer = numbersString.join('');
  // return answer[0] === '0' ? '0' : answer

  let answer = numbers.map(v=>v+'')
  .sort((a,b) => (b+a)*1 - (a+b)*1)
  .join('');

  return answer[0]==='0'?'0':answer;
}


console.log(makeMax([6, 10, 2]))
console.log(makeMax([3, 30, 34, 5, 9]))




function isSubsetOf (base, sample) {
  // const long = base.sort((a, b) => a - b)
  // const short = sample.sort((a, b) => a - b)

  // if(short[0] > long[long.length-1] || long[0] > short[short.length - 1]) {
  //   return false
  // }
  // let result

  // for(let i = 0; i < short.length; i++) {
  //   for(let j = 0; j < long.length; j++) {
  //     if(short[i] === long[j]) {
  //       result = true
  //       break;
  //     }
  //     result = false
  //   }
  // }
  // return result

  base = base.sort((a, b) => a - b)
  sample = sample.sort((a, b) => a - b)

  const findArr = (el, arr, from) => {
    for(let i = from; i < arr.length; i++) {
      if(arr[i] === el) return i
      // else if (el < arr[i]) return -1
    }
    return -1
  }

  let baseIdx = 0
  for(let i = 0; i < sample.length; i++) {
    baseIdx = findArr(sample[i], base, baseIdx)
    if(baseIdx === -1) return false
  }
  return true
}


console.log(isSubsetOf([1, 2, 3, 4, 5], [1, 3]))
console.log(isSubsetOf([1, 2, 3, 4, 5], [6, 7]))
console.log(isSubsetOf([10, 99, 123, 7], [11, 100, 99, 123]))