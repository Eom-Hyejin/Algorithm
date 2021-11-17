function test1(A, B) {
  return A % B === 0 ? B : test1(B, A % B)
}


console.log(test1(20, 8))
console.log(test1(18, 27))


function test2(n, m) {
  let arr = []
  for(let i = 1; i <= n; i++) {
    arr.push(i)
  }
  function makeper(arr, num) {
    let result = []
    if(num === 1) return arr.map(el => [el])
  
    arr.forEach((v, idx, arr) => {
      const fixer = v
      const restArr = arr.filter((_, index) => index !== idx)
      const newArr = makeper(restArr, num-1)
      const combineFixer = newArr.map(el => [fixer, ...el])
      result.push(...combineFixer)
    })
    return result
  }
  let result = []
  const resultArr = makeper(arr, m)
  resultArr.forEach(el => result.push(Number(el.join(''))))
  return result
}



console.log(test2(2, 1))
console.log(test2(3, 2))
console.log(test2(3, 3))




function test3(board, operation) {
  const tables = {
    'U' : [-1, 0],
    'D' : [1, 0],
    'L' : [0, -1],
    'R' : [0, 1]
  }

  const canUse = (M, N) => 0 <= M && M < board.length && 0 <= N && N < board[0].length
  const visited = Array(board.length).fill().map((e) => Array(board[0].length).fill(0));
  let [M, N] = [0, 0];
  let sum = 0;

  for (let move of operation) {
    let [mY, mX] = tables[move];
    M += mY;
    N += mX;
    if (!canUse(M, N)) {
      M -= mY;
      N -= mX;
      continue;
    }
    if (!visited[M][N]) {
      visited[M][N] = 1;
      sum += board[M][N];
    }
  }
  return sum;
};


const board1 = [
  [72, 0, 80, 1],
  [1, 9, 11, 10],
  [1, 1, 792, 0],
  [13, 44, 27, 0]
]
const output1 = test3(board1, 'RRDLLD');
console.log(output1);



const board2 = [
  [567, 6734, 132],
  [789, 243, 6],
  [89, 33333, 0]
]
const output2 = test3(board2, 'UUUDD')
console.log(output2);



const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]
const output3 = test3(board3, 'DDRRRUDUDUD');
console.log(output3); 