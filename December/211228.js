function landing (land) {
  // let arr = []
  // let q = []
  // for(let i = 0; i < land.length; i++) {
  //   if(!q[q.length-1]) {
  //     arr.push(Math.max(...land[i]))
  //     q.push(land[i].indexOf(Math.max(...land[i])))
  //   } else {
  //     let ex = q.pop()
  //     land[i].splice(ex, 1)
  //     arr.push(Math.max(...land[i]))
  //     q.push(land[i].indexOf(Math.max(...land[i])))
  //   }
  // }
  // return arr.reduce((acc, cur) => acc + cur,0)       문제 해석 오류

  // for(let i =land.length-2; i>=0; i--){
  //   land[i][0] = Math.max(land[i+1][1], land[i+1][2], land[i+1][3])+land[i][0];
  //   land[i][1] = Math.max(land[i+1][0], land[i+1][2], land[i+1][3])+land[i][1];
  //   land[i][2] = Math.max(land[i+1][0], land[i+1][1], land[i+1][3])+land[i][2];
  //   land[i][3] = Math.max(land[i+1][0], land[i+1][1], land[i+1][2])+land[i][3];
  // }
  // return Math.max(...land[0]);

  let answer = 0;
    
  for(let i = 0; i < land.length; i++){
    for(let j = 0; j < 4; j++){
        if(i === 0) {
            continue;
        } else {
            let arr = land[i-1].slice();
            arr[j] = 0;
            land[i][j] += Math.max.apply(null, arr);
            answer = Math.max(land[i][j], answer);
        }
      }       
  }
  return answer;
}


console.log(landing([[1,2,3,5]
                    ,[5,6,7,8]  
                    ,[4,3,2,1]]))

console.log(landing([[1,2,3,5]
                    ,[5,6,7,100]  
                    ,[4,3,2,1]]))




function targetNum (numbers, target) {
  let result = 0;
  count(0, 0);
  function count(x, value) {
    if (x < numbers.length) {
      count(x + 1, value + numbers[x]);
      count(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        result++;
      }
    }
  }
  return result;
}



console.log(targetNum([1, 1, 1, 1, 1], 3))
console.log(targetNum([1, 1, 1, 1, 2], 2))
console.log(targetNum([1, 1, 4, 1, 3], 2))




function visitedLength (dirs) {
  const cache = {};
  const obj = {
    "U": [1, 0],
    "D": [-1, 0],
    "R": [0, 1],
    "L": [0, -1],
  }

  function ignore(y, x) {
    return y > 5 || y < -5 || x > 5 || x < -5;
  }

  function move(dirs) {
    let result = 0;
    let nowX = 0, nowY = 0;

    for (const mv of dirs) {
      const [dy, dx] = obj[mv];
      const nextY = nowY + dy;
      const nextX = nowX + dx;

      if (ignore(nextY, nextX)) {
        continue;
      }

      const from = `${nowY},${nowX}`;
      const to = `${nextY},${nextX}`;

      if (!cache[from]) cache[from] = {}
      if (!cache[to]) cache[to] = {}

      nowY = nextY;
      nowX = nextX;

      if (cache[from][to] || cache[to][from]) {
        continue;
      }

      cache[from][to] = true;
      cache[to][from] = true;
      result++;
    }
    return result;
  }

  return move(dirs)

  // var x = 5;
  // var y = 5;
  // var map = {};
  // dirs.split('').forEach(command => {
  //     switch (command) {
  //         case "U":
  //             if (y >= 10) break;
  //             map[`${x},${y}-${x},${y+1}`] = true
  //             y += 1;
  //             break;
  //         case "D":
  //             if (y <= 0) break;
  //             map[`${x},${y-1}-${x},${y}`] = true
  //             y -= 1;
  //             break;
  //         case "R":
  //             if (x >= 10) break;
  //             map[`${x},${y}-${x+1},${y}`] = true
  //             x += 1;
  //             break;
  //         case "L":
  //             if (x <= 0) break;
  //             map[`${x-1},${y}-${x},${y}`] = true
  //             x -= 1;
  //             break;
  //     }
  // });
  // return Object.keys(map).length;
}


console.log(visitedLength("ULURRDLLU"))
console.log(visitedLength("LULLLLLLU"))


