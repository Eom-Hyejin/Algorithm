const coinChange = function (total, coins) {
  const memo = Array(total+1).fill().map(() => Array(coins.length).fill(0));
  for (let i = 0; i < coins.length; i++) memo[0][i] = 1;

    for (let i = 1; i <= total; i++) {
      for (let idx = 0; idx < coins.length; idx++) {
        let coinIncluded = 0;
        if (i - coins[idx] >= 0) {
          coinIncluded = memo[i-coins[idx]][idx];
        }
        let coinExcluded = 0;
        if (idx >= 1) {
          coinExcluded = memo[i][idx - 1];
        }
        memo[i][idx] = coinIncluded + coinExcluded;
      }
    }
    return memo[total][coins.length - 1];
};

console.log(coinChange( 10, [2, 3, 5, 6]))



function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(el => el === true).length
}


console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]))





function digPow(n, p){
  // n = String(n).split('')
  // let num = 0
  // for(let i = 0; i < n.length; i++) {
  //   num += n[i]**p
  //   p++
  // }
  // if(num % Number(n.join('')) === 0) {
  //   return num / Number(n.join(''))
  // } else {
  //   return -1
  // }
  let x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}


console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(695, 2))
console.log(digPow(46288, 3))




function findUniq(arr) {
  arr = arr.sort((a, b) => a-b)
  if(arr[0] !== arr[arr.length - 2]) {
    return arr[0]
  } else {
    return arr[arr.length-1]
  }
}



console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))




const decompression = function (image) {
  // 재귀를 위한 보조 함수
  // 파라미터는 차례대로 y좌표의 시작(Row Start), y좌표의 끝(Row End), x좌표의 시작(Col Start), x좌표의 끝(Col End)
  const aux = (rs, re, cs, ce, image) => {
    // base case
    // 각 좌표에는 number 타입이 저장되어 있다.
    if (rs === re) return String(image[rs][cs]);

    // 좌상, 우상, 좌하, 우하로 구분한다.
    const midRow = Math.floor((rs + re) / 2);
    const midCol = Math.floor((cs + ce) / 2);
    const leftUpper = aux(rs, midRow, cs, midCol, image);
    const rightUpper = aux(rs, midRow, midCol + 1, ce, image);
    const leftDown = aux(midRow + 1, re, cs, midCol, image);
    const rightDown = aux(midRow + 1, re, midCol + 1, ce, image);

    // 주어진 사각형 전체를 순회하고 나서 재귀를 하거나
    // 4등분한 각 사각형을 각각 순회하고 나서 재귀를 하는 방식은 데이터를 중복 조회하게 된다.
    // 재귀적으로 각 결과를 합치면서 계산하면 모든 좌표를 한 번씩만 검토하면 된다.
    const result = leftUpper + rightUpper + leftDown + rightDown;
    if (result === '1111') return '1';
    else if (result === '0000') return '0';
    else return 'X' + result;
  };

  return aux(0, image.length - 1, 0, image.length - 1, image);
};

let image = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
];
let result = decompression(image)
console.log(result)



image = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result);