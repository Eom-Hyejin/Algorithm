function sliceArray(n, left, right) {
  // let arr = Array(n).fill().map((el) => Array(n).fill(0))
  // for(let i = 0; i < arr.length; i++) {
  //   for(let j = 0; j < arr[i].length; j++) {
  //     if(i >= j) {
  //       arr[i][j] = i + 1
  //     } else {
  //       arr[i][j] = j + 1
  //     }
  //   }
  // }
  // return arr.flat().slice(left, right+1)

  const result = [];
  while (left <= right) {
      result.push(Math.max(Math.floor(left / n), left++ % n) + 1);
  }
  return result;
}


console.log(sliceArray(3, 2, 5))
console.log(sliceArray(4, 7, 14))