// DFS
const robotPath = function (room, src, dst) {
  canGo (room.length, room[0].length, src, 1)

  function canGo (M, N, cur, count) {
    const [row, col] = cur;

    if(row < 0 || row >= M || col < 0 || col >= N) return;

    if(room[row][col] === 0 || room[row][col] > count) {
      room[row][col] = count
    } else {
      return
    }

    canGo(M, N, [row+1, col], count+1)
    canGo(M, N, [row-1, col], count+1)
    canGo(M, N, [row, col+1], count+1)
    canGo(M, N, [row, col-1], count+1)
  }
  const [a, b] = dst
  return room[a][b] - 1
}



//BFS
const robotPath = function (room, src, dst) {
  const visited = Array(room.length).fill(0).map(() => Array())
  visited[src[0]][src[1]] = 1
  
  const Q = [[...src, 1]]

  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  const M = room.length - 1
  const N = room[0].length - 1

  while(Q.length) {
    let result = Q.shift()
    let [y, x, count] = result
    for(let i = 0; i < 4; i++) {
      let moveM = y + move[i][0]
      let moveN = x + move[i][1]

      if(moveN < 0 || moveN > N || moveM < 0 || moveM > M) continue;
      if(room[moveM][moveN] === 1) continue;
      if(visited[moveM][moveN]) continue;
      visited[moveM][moveN] = 1;
      Q.push([moveM, moveN, count + 1])
      if(moveM === dst[0] && moveN === dst[1]) return result[2]
    }
  }
}

let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];


console.log(robotPath(room, src, dst))