const decompression = function (image) {
  const aux = (rs, re, cs, ce, image) => {
    if(rs === re) return String(image[rs][cs])

    const midRow = Math.floor((rs + re) / 2)
    const midCol = Math.floor((cs + ce) / 2)
    const leftUpper = aux(rs, midRow, cs, midCol, image);
    const rightUpper = aux(rs, midRow, midCol + 1, ce, image);
    const leftDown = aux(midRow + 1, re, cs, midCol, image);
    const rightDown = aux(midRow + 1, re, midCol + 1, ce, image);

    const result = leftUpper + rightUpper + leftDown + rightDown;
    if (result === '1111') return '1'
    else if(result === '0000') return '0'
    else return 'X' + result
  }
  return aux(0, image.length - 1, 0, image.length - 1, image)
}






const jobAllocation = function (jobs, workersNum) {
  const memo = Array(workersNum).fill().map(() => Array(jobs.length).fill(-1))
  let count = 0;
  for (let i = jobs.length - 1; i >= workersNum - 1; i--) {
    count = count + jobs[i];
    memo[workersNum - 1][i] = count;
  }
  const aux = (workerIdx, jobIdx, jobs, left) => {
    if (memo[workerIdx][jobIdx] !== -1) return memo[workerIdx][jobIdx];
    let count = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = jobIdx; i < jobs.length - left; i++) {
      count = count + jobs[i];
      const maxNum = Math.max(count, aux(workerIdx + 1, i + 1, jobs, left - 1));
      min = Math.min(min, maxNum);
    }
    memo[workerIdx][jobIdx] = min;
    return min;
  };
  return aux(0, 0, jobs, workersNum - 1);
};


let jobs = [1, 2, 3, 4, 5, 6, 7];
let workersNum = 3;
let output = jobAllocation(jobs, workersNum);
console.log(output)






const longestPalindrome = function(str) {
  if (str.length < 2) return str.length;

  const canUse = Array(str.length).fill().map(() => Array(str.length).fill(false));

  let max = 1;
  for (let i = 0; i < str.length; i++) canUse[i][i] = true;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      canUse[i][i + 1] = true;
      max = 2;
    }
  }

  for (let len = 3; len <= str.length; len++) {
    for (let idx = 0; idx <= str.length - len; idx++) {
      const end = idx + len - 1;
      if (canUse[idx + 1][end - 1] === true && str[idx] === str[end]) {
        canUse[idx][end] = true;
        max = len;
      }
    }
  }
  return max;
}



let str = 'My dad is a racecar athlete';
let result = longestPalindrome(str);
console.log(result); 



const countIslands = function (grid) {
  if(grid.lengh === 0) return 0

  const height = grid.length;
  const width = grid[0].length;         // if조건을 쓰고 싶지 않은 경우 height&&grid[0].length
  let count = 0

  for(let i = 0; i < height; i++) {
    for(let j = 0; j < width; j++) {
      if(grid[i][j] === '0') continue;
      count++
      console.log(count, i, j)
      isValid(i, j)
    }
  }

  function isValid(row, col) {
    if(row < 0 || col < 0 || row >= height || col >= width) return;
    if(grid[row][col] === '0') return;

    grid[row][col] = '0'
    isValid(row-1, col)
    isValid(row+1, col)
    isValid(row, col-1)
    isValid(row, col+1)
  }
  console.log(count)
  return count
}




grid = [
  ['0', '1', '1', '1', '0'],
  ['0', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
];
result = countIslands(grid);
console.log(result); 

