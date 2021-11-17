const gossipProtocol = function (village, row, col) {
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]

  let count = 0;

  const Q = [[row, col]]
  const visited = Array(village.length).fill(0).map(() => Array())
  visited[row][col] = count;

  const isNotValid = (row, col) => row < 0 || col < 0 || row >= village.length || col >= village[0].length

  while(Q.length) {
    const now = Q.shift()
    const [y, x] = now;
    if(visited[y][x] > count) count = visited[y][x]
    for(let i = 0; i < 4; i++) {
      const moveY = y + move[i][0]
      const moveX = x + move[i][1]
      if(isNotValid(moveY, moveX)) continue;
      if(visited[moveY][moveX] || village[moveY][moveX] === '0') continue;
      visited[moveY][moveX] = visited[y][x]+1
      Q.push([moveY, moveX])
    }
  }
  return count
};



console.log(gossipProtocol([
  '0101',
  '0111',
  '0110',
  '0100',
], 1, 2))