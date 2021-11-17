const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  const matrix = createMatrix(village);
  const directions = [
    [-1, 0], 
    [1, 0], 
    [0, -1], 
    [0, 1]
  ];
  const isInside = (y, x) => 0 <= y && y < matrix.length && 0 <= x && x < matrix[0].length;
  const visited = Array(matrix.length).fill().map((e) => Array(matrix[0].length).fill(false));
  visited[row][col] = true;
  
  const Q = [[row, col, 0]];
  let day = 0;
  while (Q.length) {
    let [nowY, nowX, count] = Q.shift();
    if (count > day) day = count;
    for (let direction of directions) {
      let [moveY, moveX] = direction;
      let [nextY, nextX] = [nowY + moveY, nowX + moveX];
      if (isInside(nextY, nextX) && matrix[nextY][nextX] === '1' && !visited[nextY][nextX]) {
        Q.push([nextY, nextX, count + 1]);
        visited[nextY][nextX] = true;
      }
    }
  }
  return day;
};





const robotPath = function (room, src, dst) {
  const up = [-1, 0];
  const down = [1, 0];
  const left = [0, -1];
  const right = [0, 1];
  const directions = [up, down, left, right];
  const isInside = (y, x) => 0 <= y && y < room.length && 0 <= x && x < room[0].length;
  const visited = Array(room.length).fill().map((e) => Array(room[0].length).fill(false));
  visited[src[0][src[1]]] = true;
  
  const Q = [[...src, 0]];
  while (Q.length) {
    let [nowY, nowX, min] = Q.shift();
    for (let direction of directions) {
      let [moveY, moveX] = direction;
      let [nextY, nextX] = [nowY + moveY, nowX + moveX];
      if (nextY === dst[0] && nextX === dst[1]) return min + 1;
      if (isInside(nextY, nextX) && room[nextY][nextX] === 0 && !visited[nextY][nextX]) {
        Q.push([nextY, nextX, min + 1]);
        visited[nextY][nextX] = true;
      }
    }
  }
};





// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx-1)/2)
  // TODO: 여기에 코드를 작성합니다.
}

function insert(heap, item) {
  heap.push(item)
  if(heap.length > 1) {
    let curIdx = heap.length-1
    let parentIdx = getParentIdx(curIdx)
    
    while(heap[curIdx] < heap[parentIdx]) {
      swap(curIdx, parentIdx, heap)
      curIdx = parentIdx
      parentIdx = getParentIdx(curIdx)
    }
  }
  return heap

  // TODO: 여기에 코드를 작성합니다.
}

function removeRoot(heap) {
  swap(0, heap.length - 1, heap);
  heap.pop();
  if (heap.length === 0) return [];

  let curIdx;
  let minIdx = 0;
  while (curIdx !== minIdx) {
    curIdx = minIdx;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;
    if (left < heap.length && heap[left] < heap[minIdx]) {
      minIdx = left;
    }

    if (right < heap.length && heap[right] < heap[minIdx]) {
      minIdx = right;
    }

    swap(curIdx, minIdx, heap);
  }

  return heap;
  // TODO: 여기에 코드를 작성합니다.
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  const sort = [];
  while(minHeap.length > 0) {
    sort.push(minHeap[0])
    minHeap = removeRoot(minHeap)
  }
  return sort
  // TODO: 여기에 코드를 작성합니다.
};




console.log(heapSort([5, 4, 3, 2, 1]))





function solution1(lottos, win_nums) {
  let count = lottos.filter(el => el === 0).length
  let matchLotto = lottos.filter(el => el !== 0).filter(el => win_nums.includes(el)).length

  let result = [count+matchLotto, matchLotto]
  console.log(result)

  for(let i = 0; i < result.length; i++) {
    if(result[i] === 6) result[i] = 1
    else if(result[i] === 5) result[i] = 2
    else if(result[i] === 4) result[i] = 3
    else if(result[i] === 3) result[i] = 4
    else if(result[i] === 2) result[i] = 5
    else if(result[i] === 1 || result[i] === 0) result[i] = 6
  }
  return result;
}




console.log(solution1([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution1([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))


function solution2(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let result = s;
  
  for(let i = 0; i < numbers.length; i++) {
      let arr = result.split(numbers[i]);
      result = arr.join(i);
  }
  
  return Number(result);
}




console.log(solution2("one4seveneight"))
console.log(solution2("2three45sixseven"))
console.log("123")




function solution3(n) {
  return String(n).split('').reverse().map(el => Number(el))
}



console.log(solution3(12345))




function solution4(n, m) {
  const gcd = (n, m) => n % m === 0 ? m : gcd(m, n % m)
  const lcm = (n, m) => n*m / gcd(n, m)

  return [gcd(n, m), lcm(n, m)]
}


console.log(solution4(3, 12))



function solution5(arr) {
  const min = Math.min(...arr)
  return arr.length === 1 ? [-1] : arr.filter(el => el !== min)
}


console.log(solution5([4,3,2,1]))
console.log(solution5([10]))




function solution6(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur
  }) / arr.length
}


console.log(solution6([1,2,3,4]))
console.log(solution6([5, 5]))



function solution7(num) {
  let count = 0;
  while(count <= 500) {
    if(num === 1) return count
    if(num % 2 === 0) {
      count++
      num = num / 2
    }
    else if(num % 2 !==0) {
      count++
      num =  num * 3 + 1
    } 
  }
  return -1
}



console.log(solution7(6))
console.log(solution7(16))
console.log(solution7(626331))




function solution8(phone_number) {
  return phone_number.slice(0, phone_number.length-4).replace(/[0-9]/g, '*') +
  phone_number.slice(phone_number.length-4)
}



console.log(solution8("01033334444"))
console.log(solution8("027778888"))




function solution9(arr1, arr2) {
  // let result = Array(arr1.length).fill().map(() => [])
  // for(let i = 0; i < arr1.length; i++) {
  //   for(let j = 0; j < arr1[i].length; j++) {
  //     result[i][j] = arr1[i][j] + arr2[i][j]
  //   }
  // }
  // return result;

  return arr1.map((el, i) => el.map((e, j) => e + arr2[i][j]))
}


console.log(solution9([[1],[2]], [[3],[4]]))




function solution10(numbers) {
  let result = [];

  for(let i = 0; i < numbers.length; i++) {
    for(let j = i+1; j < numbers.length; j++) {
      // if(!result.includes(numbers[i] + numbers[j])) {
        result.push(numbers[i] + numbers[j])
      // }
    }
  }
  result = [...new Set(result)]
  return result.sort((a, b) => a-b)
}



console.log(solution10([2,1,3,4,1]))





function solution11(arr){
  // let result = [];
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] !== arr[i+1]) result.push(arr[i])
  // }
  // return result;
  return arr.filter((el, idx) => el !== arr[idx+1])
}



console.log(solution11([1,1,3,3,0,1,1]))
console.log(solution11([4,4,4,3,3]))




function solution12(left, right) {
  let result = 0;
  let count = 0;
  for(let el = left; el <= right; el++) {
    for(let i = 1; i <= el; i++) {
      if(el % i === 0) {
        count++
        
      }
    }
    count % 2 === 0 ? result += el : result -= el
    count = 0
  }
  return result;
}



console.log(solution12(13, 17))
console.log(solution12(24, 27))




function solution13(a, b) {
  if(a === b) return a
  let [x, y] = a < b ? [a, b] : [b, a]
  let result = 0;

  for(let i = x; i <= y; i++) {
    result += i
  }
  return result;
}



console.log(solution13(3, 5))
console.log(solution13(3, 3))
console.log(solution13(5, 3))






function solution14(s) {
  // return Number(s)
  return s/1
}



console.log(solution14("1234"))
console.log(solution14("-1234"))




function solution15(s) {
  let regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}



console.log(solution15("a234"))
console.log(solution15("1234"))





function solution16(s) {
  s = s.split(' ')
  return s.map((el, idx) => el.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('')).join(' ')
}



console.log(solution16("try hello world"))
console.log(solution16("hi hello my name"))






function solution17(x) {
  let num = String(x).split('').reduce((acc, cur) => Number(acc) + Number(cur))
  return x % num === 0
}


console.log(solution17(13))
console.log(solution17(12))




function solution18(strings, n) {
  // return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
  for(let i = 0; i < strings.length; i++) {
    let str = strings[i][n]
    strings[i] = str + strings[i]
  }
  strings.sort()

  let result = []
  for(let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "")
    result.push(strings[j])
  }
  return result;
}



console.log(solution18(["sun", "bed", "car"], 1))
console.log(solution18(["abce", "abcd", "cdx"], 2))




function solution19(n) {
  return Number(String(n).split('').sort().reverse().join(''))
}



console.log(solution19(118372))





function solution20(n) {
  return String(n).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0)
}



console.log(solution20(123))
console.log(solution20(987))



function solution21(arr, divisor) {
  arr = arr.map(el => el % divisor === 0 ? el : null).filter(e => e !== null).sort((a, b) => a - b)
  return arr.length ? arr : [-1]
}


console.log(solution21([5, 9, 7, 10], 5))
console.log(solution21([2, 36, 1, 3], 1))
console.log(solution21([3,2,6], 10))




function solution22(s) {
  let mid = Math.floor(s.length/2)
  return s.length % 2 === 0 ? s[mid-1]+s[mid] : s[mid]
}



console.log(solution22("abcde"))
console.log(solution22("qwer"))
