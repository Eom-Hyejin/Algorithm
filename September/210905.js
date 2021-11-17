const { countReset } = require('console');

function solution1(dartResult) {
  let temp = 0;
  let answer = [];
  
  for(let i = 0; i < dartResult.length; i++) {
      if(dartResult[i] >= 0 && dartResult[i] <= 9) {
          if(dartResult[i] == 1 && dartResult[i+1] == 0) {
              temp = 10;
              i++;
          } else {
              temp = dartResult[i];
          }
      }
      else if(dartResult[i] === 'S') {
          answer.push(temp);
      }
      else if(dartResult[i] === 'D') {
          answer.push(temp**2);
      }
      else if(dartResult[i] === 'T'){
          answer.push(temp**3);
      }
      else if(dartResult[i] == '#') {
         answer[answer.length-1] *= -1;
      }
      else if(dartResult[i] == '*') {
          answer[answer.length-1] *= 2;
          answer[answer.length-2] *= 2;
      }
  }
  return answer.reduce((acc, cur) => Number(acc)+Number(cur))
}



console.log(solution1("1S*2T*3S"))
console.log(solution1("1D2S#10S"))
console.log(solution1("1T2D3D#"))
console.log(solution1("1D2S3T*"))




const robotPath2 = function (room, src, sDir, dst, dDir) {
  // 가로와 세로의 길이
  const R = room.length;
  const C = room[0].length;
  // 4가지 방향: 위(1), 오른쪽(2), 아래(3), 왼쪽(4)
  // 차례대로 [방향, 상하이동, 좌우이동]
  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  // 좌표가 유효한 좌표인지 확인하는 함수
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 각 위치별 최소의 동작으로 도달 가능한 경우의 방향을 저장
  const directions = [];
  // 각 위치별 최소 동작의 수를 저장. 편의상 거리(dist)로 표현
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  // bfs 구현을 위해 큐를 선언한다.
  const queue = Array(R * C);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear++;
  };
  const deQueue = (queue) => {
    return queue[front++];
  };

  // 출발 지점의 좌표
  const [sRow, sCol] = src;
  directions[sRow][sCol] = sDir;
  dist[sRow][sCol] = 0;

  // 목표 지점의 좌표
  const [dRow, dCol] = dst;

  enQueue(queue, [sRow, sCol]);
  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col];

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      // 이동할 좌표
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      // 유효한 좌표가 아니거나
      // 해당 좌표가 장애물(1)인 경우 건너뛴다.
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

      // 현재 위치의 방향과 목표 위치의 방향과의 차이
      const dDiff = Math.abs(nDir - dir);
      let candidate;
      if (dDiff === 0) {
        // 차이가 없는 경우
        // 출발 지점에서의 방향과 이동하려는 방향이 같은 경우
        // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야 한다.
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전해야 하는 경우: 회전 2 + 직진 1
        candidate = dist[row][col] + 3;
      } else {
        // 1번만 회전해도 되는 경우: 회전 1 + 직진 1
        candidate = dist[row][col] + 2;
      }

      if (nRow === dRow && nCol === dCol) {
        // 다음에 도달하는 곳이 목표 지점인 경우
        // 목표 방향까지 고려해서 필요한 거리를 계산한다.
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          candidate = candidate;
        } else if (dDiff === 2) {
          candidate = candidate + 2;
        } else {
          candidate = candidate + 1;
        }
      }

      if (candidate < dist[nRow][nCol]) {
        // 유망한 좌표는 큐에 삽입한다.
        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate;
        // 방향은 전부 같다.
        directions[nRow][nCol] = nDir;
      }
    }
  }

  return dist[dRow][dCol];
};




let room = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 1],
];
let src = [3, 0];
let sDir = 3;
let dst = [2, 2];
let dDir = 2;
console.log(robotPath2(room, src, sDir, dst, dDir))





const rangeMinimum = function (arr, ranges) {
  // let count = []
  // for(let i = 0; i < ranges.length; i++) {
  //   let sliceArr = arr.slice(ranges[i][0], ranges[i][1]+1)
  //   count.push(Math.min(...sliceArr))
  // }
  // return count
  const createMinTree = (arr, ts, te, tree, idx) => {
    if (ts === te) {
      tree[idx] = arr[ts];
      return arr[ts];
    }

    const mid = Math.floor((ts + te) / 2);
    tree[idx] = Math.min(
      createMinTree(arr, ts, mid, tree, idx * 2 + 1), //
      createMinTree(arr, mid + 1, te, tree, idx * 2 + 2)
    );

    return tree[idx];
  };

  let tree = [];
  createMinTree(arr, 0, arr.length - 1, tree, 0);

  const findMin = (ts, te, rs, re, idx) => {
    if (rs <= ts && te <= re) {
      return tree[idx];
    }

    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, 2 * idx + 1), //
      findMin(mid + 1, te, rs, re, 2 * idx + 2)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, 0);
  });
  return mins;
};


console.log(rangeMinimum([1, 2, 3], [[1, 1]]))
console.log(rangeMinimum([1, 3, 2, 7, 9, 11], [[1, 4], [0, 3]]))
console.log(rangeMinimum([10, 11, 12, 3, 6, 7, 8, 9], [[4, 7], [0, 2]]))





// const largestRectangularArea = function (histogram) {
//   let largest = 0;

//   for(let left = 0; left < histogram.length; left++) {
//     let min = histogram[left]
//     for(let right = left; right < histogram.length; right++) {
//       if(histogram[right] < min) min = histogram[right]
//       let area = min * (right - left + 1)

//       if(area > largest) largest = area
//     }
//   }
//   return largest
// };
const largestRectangularArea = function (histogram) {
  const createMinIdxTree = (arr, ts, te) => {
    if (ts === te) return { idx: ts, val: arr[ts] };

    const mid = parseInt((ts + te) / 2);
    const left = createMinIdxTree(arr, ts, mid);
    const right = createMinIdxTree(arr, mid + 1, te);

    return {
      val: Math.min(left.val, right.val),
      idx: left.val < right.val ? left.idx : right.idx,
      left,
      right,
    };
  };
  const tree = createMinIdxTree(histogram, 0, histogram.length - 1);

  const getMinIdx = (ts, te, rs, re, tree) => {
    if (rs <= ts && te <= re) return tree.idx;
    if (te < rs || re < ts) return rs;

    const mid = parseInt((ts + te) / 2);
    const left = getMinIdx(ts, mid, rs, re, tree.left);
    const right = getMinIdx(mid + 1, te, rs, re, tree.right);
    return histogram[left] < histogram[right] ? left : right;
  };

  const getRangeArea = (start, end) => {
    if (start > end) return 0;
    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);

    return Math.max(
      (end - start + 1) * histogram[minIdx],
      getRangeArea(start, minIdx - 1),
      getRangeArea(minIdx + 1, end)
    );
  };

  return getRangeArea(0, histogram.length - 1);
};



console.log(largestRectangularArea([2, 1, 4, 5, 1, 3, 3]), 8)
console.log(largestRectangularArea([6, 2, 5, 4, 5, 1, 6]), 12)
console.log(largestRectangularArea([1, 1, 1, 1, 2, 1, 3]), 7)




const LIS = function (arr) {
  const N = arr.length;
  const lis = Array(N).fill(1)

  for(let i = 1; i < N; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        console.log(i, j)
        console.log(arr[i])
        lis[i] = lis[j] + 1
      }
    }
  }
  return Math.max(...lis)
}



console.log(LIS([3, 10, 2, 1, 20]))





const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const count = Array(M+1).fill().map(() => Array(N+1).fill(-1))

  for (let i = 0; i <= M; i++) {
    for (let j = 0; j <= N; j++) {
      if (i === 0 || j === 0) {
        count[i][j] = 0;
      } else if (str1[i-1] === str2[j-1]) {
        count[i][j] = count[i-1][j-1] + 1;
      } else {
        count[i][j] = Math.max(count[i-1][j], count[i][j-1]);
      }
    }
  }
  return count[M][N];
}




console.log(LCS('abcd', 'aceb'))
console.log(LCS('acaykp', 'capcak'))
console.log(LCS( '1c2o3d4d5e', 'ss1tt2aa3tt4ee5ss'))