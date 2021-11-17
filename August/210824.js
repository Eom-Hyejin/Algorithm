function nbYear(p0, percent, aug, p) {
  let arr = [p0]
  let count = 0;
  
  while(arr.length) {
    let save = arr.pop()
    if(save >= p) return count;
    arr.push(save + save*(percent*0.01) + aug)
    count++
  }
  return count
}




console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))






var summation = function (num) {
  let result = 0;
  for(let i = 0; i <= num; i++) {
    result += i
  }
  return result
}



console.log(summation(8))




function noSpace(x){
  // if(!x.includes(' ')) return x
  // x = x.replace(' ', '')
  // return noSpace(x)
  return x.replace(/\s/g, '');      //문자열 내 모든 공백 제거 
}



console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))





function isTriangle(a,b,c){
  if(a < 0 || b < 0 || c < 0) return false;
  if(a === b === c) return true;
  let max = Math.max(a, b, c)
  if(max < a+b+c-max) return true;
  return false;
}




console.log(isTriangle(1,2,2))
console.log(isTriangle(7,2,2))




function squareSum(numbers){
  return numbers.reduce((acc, cur) => {
    return acc + cur*cur
  }, 0)
}


// console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))




function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  stuff.sort((a, b) => a - b)
  let count = 0;

  while(stuff.length) {
    let temp = stuff[0] + stuff[stuff.length-1]
    if(temp > limit) {
      stuff.pop()
      count++
    }
    else {
      stuff.pop()
      stuff.shift()
      count++ 
    }
  }
  return count
}



console.log(movingStuff([42, 25, 60, 73, 103, 167], 187))






function partTimeJob(k) {
  let arr = [500, 100, 50, 10, 5, 1]
  let count = 0;
  let idx = 0;
  
  while(k > 0) {
    const addCoin = Math.floor(k / arr[idx])
    count += addCoin 
    k -= (arr[idx] * addCoin) 
    idx++
  }
  return count
}



console.log(partTimeJob(4000))
console.log(partTimeJob(4972))





function boardGame(board, operation) {
  let [M, N] = [0, 0];
  const len = board.length-1;

  let count = 0;

  const table = {
    'U'() { M-=1 },
    'D'() { M+=1 },
    'L'() { N-=1 },
    'R'() { N+=1 },
  };

  const isValid = (M, N) => M >= 0 && N >= 0 && M <= len && N <= len;

  for( let i=0; i<operation.length; i++ ) {
    table[operation[i]]();
    if( !isValid(M, N) ) return 'OUT';
    count += board[M][N];
  }

  return count;
};

const board2 =
[
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0]
]
console.log(boardGame(board2, 'UUUDD'))


function ocean(target, type) {
  // bag 이라는 배열에 금액을 만들 수 있는 경우의 수를 기록
  // 각 인덱스 no# = 만드려는 금액 을 의미
  // ex) target = 5, type = [1, 2, 5] 면
  // bag[3] = 2  => 3을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용
  // bag[4] = 2  => 4를 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용
  // bag[5] = 4  => 5를 만드는 경우의 수 = 1*5 , 1*3 + 2, 1 + 2*2, 5*1
  // 0 을 만들 수 있는 경우는 아무것도 선택하지 않으면 되기 때문에 bag[0] = 1 로 초기값 설정
  let bag = [1];

  // 인덱스 no# = 만드려는 금액 이기 때문에
  // bag 을 target 금액만큼의 길이를 가진 배열을 만들어 주고,
  // 경우의 수를 저장하기 위해 초기값은 모두 0으로 만들어 준다
  for(let i = 1; i <= target; i++)
    bag[i] = 0;
  // 돈의 종류가 담겨있는 배열을 순차적으로 탐색   
  for(let i = 0; i < type.length; i++) {
  // target 금액까지 순차적으로 1씩 증가하면서    
    for(let j = 1; j <= target; j++)
  // bag의 인덱스가 type[i] 보다 큰 구간만
  // (작은 구간은 type[i]로 만들 수 없는 금액이기 때문에 탐색할 필요가 없다)    
      if(type[i] <= j)
  // 기존 경우의 수에 type[i]를 뺀 금액을 만들 수 있는 경우의 수를 더해준다       
        bag[j] += bag[j-type[i]];
  }
  // bag 의 target 인덱스에 target 금액을 훔칠 수 있는 경우의 수가 쌓이므로
  // 해당 값을 리턴해 준다
  return bag[target];
}