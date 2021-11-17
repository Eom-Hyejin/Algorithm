const robotPath = function (room, src, dst) {
  // 세로와 가로의 길이가 각각 M,N인 2차원 배열
  // 1은 장애물, 0은 이동가능 통로
  // 일분에 한 칸씩 상하좌우로 이동 가능
  // 목표지점까지 도달하는데 걸리는 최소 시간 리턴


  // src에서 부터 시작한다. 
  // 상하좌우에 1이 없고 방문하지 않은 곳으로 이동
  //   방문하지 않은 곳인지 유효성 검사
  //   중복되지 않는지 확인
  // 움직이는 횟수를 하나씩 증가


  const canGo = (M, N, cur, count) => {
    // 현재 위치
    const [row, col] = cur;
    console.log(cur)

    // 배열의 범위를 벗어난 경우
    if (row < 0 || row >= M || col < 0 || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > count) {
      room[row][col] = count;
    } else {
      // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
      return;
    }

    // dfs로 4가지 방향에 대해 탐색을 한다.
    // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
    // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
    // 약간 더 효율적이다.
    canGo(M, N, [row + 1, col], count + 1); // 상
    canGo(M, N, [row - 1, col], count + 1); // 하
    canGo(M, N, [row, col - 1], count + 1); // 좌
    canGo(M, N, [row, col + 1], count + 1); // 우
  };

  // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
  // 바로 옆 통로는 2가 된다.
  // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
  canGo(room.length, room[0].length, src, 1);

  const [r, c] = dst;
  return room[r][c] - 1;
};



let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output)





const subsets = (nums) => {       //멱집합 구하기
  const res = [];

  const dfs = (start = 0, arr = []) => {
    res.push(arr);
    
    if(arr.length === nums) return

    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };
  dfs();

  return res;
};






function rockPaperScissors (num, arr = ['rock', 'paper', 'scissors']) {
  num = num || 3
  let result = [];
  if(num === 1) return arr.map(el => [el])

  arr.forEach((str, idx, arr) => {
    const newArr = rockPaperScissors(num - 1, arr)
    const combineArr = newArr.map(el => [str, ...el])
    result.push(...combineArr)
  })
  return result;
}






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


console.log(newChickenRecipe([1, 10, 1100, 1111], 2))





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



console.log(boringBlackjack([1, 2, 3, 4]))






function divideChocolateStick(M, N) {
  const GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b)
  const gcd = GCD(M, N)

  let result = [];
  for(let i = 1; i <= Math.floor(Math.sqrt(gcd)); i++) {
    if(gcd % i === 0) {
      result.push([i, M/i, N/i])
      if(i * i < gcd) {
        let j = gcd / i
        result.push([j, M/j, N/j])
      }
    }
  }
  result.sort((a, b) => a[0] - b[0])
  return result;
}



console.log(divideChocolateStick(12, 42))




function missHouseMeal(sideDishes) {
  const result = [];
  sideDishes = sideDishes.sort()
  const dfs = (start = 0, arr = []) => {
    result.push(arr)
    for(let i = start; i < sideDishes.length; i++) {
      dfs(i+1, [...arr, sideDishes[i]])
    }
  }
  dfs()
  return result;
}


console.log(missHouseMeal(["eggroll", "kimchi", "fishSoup"]))



function missHouseMeal(sideDishes) {
  return sideDishes.sort().reduce((acc, cur) => acc.concat(acc.map((e) => e.concat(cur))), [[]]).sort();
}