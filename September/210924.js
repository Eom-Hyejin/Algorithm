function movingStuff(stuff, limit) {
  stuff.sort((a, b) => a-b)
  let count = 0

  while(stuff.length) {
    let move = stuff[0] + stuff[stuff.length-1]
    if(move > limit) {
      stuff.pop()
      count++
    } else {
      stuff.pop()
      stuff.shift()
      count++
    }
  }
  return count
}

// console.log(movingStuff([70, 50, 80, 50], 100))
console.log(movingStuff( [60, 73, 80, 87, 103, 109, 119, 123, 128, 129, 136, 146, 153, 168, 182], 200))




function partTimeJob(k) {
  let arr = [500, 100, 50, 10, 5, 1]
  let count = 0
  let idx = 0

  while(k > 0) {
    count += Math.floor(k/arr[idx])
    k = k % arr[idx]
    idx++
  }
  return count
}


console.log(partTimeJob(4000))
console.log(partTimeJob(4972))





function boardGame(board, operation) {
  let [M, N] = [0, 0]
  let len = operation.length-1
  let count = 0

  const table = {
    'U'() {M-=1},
    'D'() {M+=1},
    'L'() {N-=1},
    'R'() {N+=1}
  }

  for(let i = 0; i < operation.length; i++) {
    table[operation[i]]();
    if(M < 0 || N < 0 || M > len || N > len) return 'OUT'
    count += board[M][N]
  } 
  return count
}


const board1 = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0]
]
const output1 = boardGame(board1, 'RRDLLD');
console.log(output1); 


const board2 = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0]
]
const output2 = boardGame(board2, 'UUUDD');
console.log(output2);


const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]
const output3 = boardGame(board3, 'DDRRRUDUDUD');
console.log(output3); 




function rockPaperScissors (num, arr=['rock', 'paper', 'scissors']) {
  num = num || 3
  let result = []
  if(num === 1) return arr.map(el => [el])

  arr.forEach((str, idx, arr) => {
    const newArr = rockPaperScissors(num - 1, arr)
    const combineArr = newArr.map(el => [str, ...el])
    result.push(...combineArr)
  })
  return result;
}


console.log(rockPaperScissors())
console.log(rockPaperScissors(5))




function newChickenRecipe(stuffArr, choiceNum) {
  stuffArr = stuffArr.filter(el => {
    const element = String(el).split('').filter(e => e === '0')
    if(element.length <= 2) return el
  })
  if(!stuffArr || stuffArr.length < choiceNum) return [];
  stuffArr.sort((a, b) => a-b)

  return aux(stuffArr, choiceNum)
}

function aux (arr, num) {
  const result = [];
  if(num === 1) return arr.map(el => [el])

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const rest = arr.filter((_, index) => index !== idx)
    const newArr = aux(rest, num-1)
    const combineArr = newArr.map(el => [fixed, ...el])
    result.push(...combineArr)
  })
  return result;
}





function boringBlackjack(cards) {
  let count = 0;
  let len = cards.length;

  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      for(let k = j + 1; k < len; k++) {
        const num = cards[i] + cards[j] + cards[k]
        if(isPrime(num)) count++
      }
    }
  }
  return count
}

function isPrime(num) {
  for(let i = 2; i < num/2; i++) {
    if(num % i === 0) return false;
  }
  return true
}