const uglyNumbers = function (n) {
  // let ugly = Array(n).fill(0)
  // ugly[0] = 1;

  // let i2 = 0, i3 = 0, i5 = 0;
  // let next_multiple_of_2 = 2;
  // let next_multiple_of_3 = 3;
  // let next_multiple_of_5 = 5;
  // let num = 1;

  // for(let i = 1; i < n; i++) {
  //   num = Math.min(next_multiple_of_2, Math.min(next_multiple_of_3, next_multiple_of_5))
  //   ugly[i] = num;
  //   if(num === next_multiple_of_2) {
  //     i2++
  //     next_multiple_of_2 = ugly[i2]*2
  //   }
  //   if(num === next_multiple_of_3) {
  //     i3++
  //     next_multiple_of_3 = ugly[i3]*3
  //   }
  //   if(num === next_multiple_of_5) {
  //     i5++
  //     next_multiple_of_5 = ugly[i5]*5
  //   }
  // }
  // return num;

  const uglyNumbers = [1];
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    const nextMultipleOf2 = uglyNumbers[idx2] * 2;
    const nextMultipleOf3 = uglyNumbers[idx3] * 3;
    const nextMultipleOf5 = uglyNumbers[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNumbers.push(nextUglyNum);

    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return uglyNumbers[n - 1];
}




console.log(uglyNumbers(1))
console.log(uglyNumbers(8))
console.log(uglyNumbers(15))




// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

const closestPairOfPoints = function (points) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let src = 0; src < points.length; src++) {
    for (let dst = src + 1; dst < points.length; dst++) {
      const dist = calculateDistance(points[src], points[dst]);
      min = Math.min(min, dist);
    }
  }
  return Math.floor(min*100);
};




console.log(closestPairOfPoints([[1, 0], [4, 0], [5, 0], [7, 0]]))
console.log(closestPairOfPoints( [[7, 3], [12, 30], [40, 50], [12, 10], [3, 4]]))
console.log(closestPairOfPoints( [[0, 2], [6, 67], [43, 81], [39, 101], [189, 140]]))
console.log(closestPairOfPoints(  [[0, 100], [3, 4], [58, 34], [22, 35], [121, 132], [140, 153]]))





function longest(s1, s2) {
  let arr = s1.split('').concat(s2.split(''))

  arr = [...new Set(arr)].sort()
  return arr.join('')
}



console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")