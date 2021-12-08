function past (h, m, s) {
  return (h*3600 + m*60 + s)*1000
}


console.log(past(0, 1, 1))
console.log(past(1, 1, 1))
console.log(past(0, 0, 0))
console.log(past(1, 0, 1))




function expandedForm (num) {
  // let arr = []
  // num = String(num).split('')
  // for(let i = 0; i < num.length; i++) {
  //   if(num[i] !== '0') {
  //     arr.push(num[i] * Math.pow(10, num.length-1-i))
  //   }
  // }
  // return arr.join(" + ")

  return num.toString().split("").reverse().map((el, idx) => el * Math.pow(10, idx))
  .filter((el) => el > 0).reverse().join(" + ")
}


console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))





function snail (array) {
  // let mMax = array[0].length-1
  // let nMax = array.length-1
  // let m = 0
  // let n = 0

  // let result = []

  // while(m <= mMax && n <= nMax) {
  //   for(let i = m; i <= mMax; i++) {
  //     result.push(array[n][i])
  //   }
  //   n++
    
  //   for(let i = n; i <= nMax; i++) {
  //     result.push(array[i][mMax])
  //   }
  //   mMax--
    
  //   if(n <= nMax) {
  //     for(let i = mMax; i >= m; i--) {
  //       result.push(array[nMax][i])
  //     }
  //     nMax--
  //   }
    
  //   if (m <= mMax) {
  //     for(let i = nMax; i >= n; i--) {
  //       result.push(array[i][m])
  //     }
  //     m++
  //   }
  // }
  // return result

  let result;
  while (array.length) {
    result = (result ? result.concat(array.shift()) : array.shift());
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
      result = result.concat((array.pop() || []).reverse());
    }
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
}


console.log(snail([[]]))
console.log(snail([[1]]))
console.log(snail([[1, 2, 3] 
                  ,[4, 5, 6] 
                  ,[7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5])

console.log(snail([[1, 2, 3, 4, 5]
                  ,[6, 7, 8, 9, 10] 
                  ,[11, 12, 13, 14, 15] 
                  ,[16, 17, 18, 19, 20]
                  ,[21, 22, 23, 24, 25]]))