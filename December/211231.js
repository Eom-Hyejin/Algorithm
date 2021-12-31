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