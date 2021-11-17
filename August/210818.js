// const rotateMatrix = function (matrix, K = 1) {
  // if(matrix.length === 0) return []

  // let M = matrix.length; // 세로
  // let N = matrix[0].length; // 가로

  // K = K % 4;
  // if (K === 0) return matrix;

  // let result;
  // if (K === 2) {
  //   result = Array(M).fill(0).map((e) => Array(N).fill(0)); // 180도일 경우
  //   for (let i = 0; i < M; i++) {
  //     for (let j = 0; j < N; j++) {
  //       result[i][j] = matrix[M - i - 1][N - j - 1];
  //     }
  //   }
  // } else if (K === 1) {
  //   result = Array(N).fill(0).map((e) => Array(M).fill(0));
  //   for (let i = 0; i < N; i++) {
  //     for (let j = 0; j < M; j++) {
  //       result[i][j] = matrix[M-1-j][i];
  //     }
  //   }
  // } else if (K === 3) {
  //   result = Array(N).fill(0).map((e) => Array(M).fill(0));
  //   for (let i = 0; i < N; i++) {
  //     for (let j = 0; j < M; j++) {
  //       result[i][j] = matrix[j][N-1-i];
  //     }
  //   }
  // } 
  // return result;
// };

const rotateMatrix = function (matrix, K = 1) {
  if (matrix.length === 0) return [];
  K = K % 4;
  if (K === 0) return matrix;
  
  let M = matrix.length;
  let N = matrix[0].length;
  let [x, y] = K % 2 ? [N, M] : [M, N];
  let result = Array(x).fill(0).map((e) => Array(y).fill(0));
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (K === 1) result[i][j] = matrix[M - 1 - j][i];
      if (K === 2) result[i][j] = matrix[M - i - 1][N - j - 1];
      if (K === 3) result[i][j] = matrix[j][N - 1 - i];
    }
  }
  return result;
};



console.log(rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
], 1))




function removeChar(str){
  return str.slice(1, str.length-1)
};


console.log(removeChar('asbaea'))




function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort((a, b) => a- b).slice(0, 2)
  return Number(numbers[0]) + Number(numbers[1])
}


console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))






function maskify(cc) {
  if(cc.length < 5) {
    return cc
  }
  let pre = cc.slice(cc.length-4, cc.length).split('')
  let hide = cc.slice(0, cc.length-4).length
  return Array(hide).fill('#').concat(pre).join('')
}



console.log(maskify('4556364607935616'))
console.log(maskify('1'))





class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,18]))