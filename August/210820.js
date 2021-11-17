function radixSort(arr) {
  let minusArr = arr.filter(el => el < 0).map(el => el*-1)
  let plusArr = arr.filter(el => el >= 0)

  arr = [ minusArr, plusArr].map(numArr => {
    const maxNum = Math.max(...numArr) * 10;
    let div = 10;
    while (div <= maxNum) {
      let result = [...Array(10)].map(() => []);
      for (let el of numArr) {
        result[Math.floor((el % div) / (div / 10))].push(el);
      }
      numArr = [].concat.apply([], result);
      div *= 10;
    }
    return numArr
  })
  return arr[0].reverse().map(el => el*-1).concat(arr[1])
}


console.log(radixSort([5, 4, 3, 2, 1]))
console.log(radixSort([1, 2, 43, 100, 21]))
console.log(radixSort([20, -10, -11, 2, 29]))





const LSCS = function (arr) {
  let compareNum = arr[0]
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    compareNum = Math.max(compareNum + arr[i], arr[i])
    max = Math.max(max, compareNum)
  }
  return max
};



console.log(LSCS([1, 2, 3]))
console.log(LSCS([-7, -6, -9]))
console.log(LSCS([1, 2, 3, -6, 4, 5, 6]))
console.log(LSCS([1, 2, 3, -4, 5, -4, 5, -4, -4, -1]))
console.log(LSCS([1, 2, 3, -5, 4, 5, 6]))




const spiralTraversal = function (matrix) {
  // const arr = [];
    
  // while (matrix.length) {
  //   arr.push(
  //     ...matrix.shift(),
  //     ...matrix.map(a => a.pop()),
  //     ...(matrix.pop() || []).reverse(),
  //     ...matrix.map(a => a.shift()).reverse()
  //   );
  // }
  // return arr.join('');
  if (!matrix || matrix.length === 0) return [];

  let result = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; startCol <= i; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let i = endRow; startRow <= i; i--) {
        result.push(matrix[i][startCol]);
      }
      startCol++;
    }
  }
  return result.join('');
}


let matrix = [
  ['T', 'y', 'r', 'i'],
  ['i', 's', 't', 'o'],
  ['n', 'r', 'e', 'n'],
  ['n', 'a', 'L', ' '],
];

console.log(spiralTraversal(matrix))






var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};



console.log(countBits(4))
console.log(countBits(9))
console.log(countBits(10))



function duplicateEncode(word){
  // let result = ''
  // word = word.toLowerCase();

  // for(let i = 0; i < word.length; i++) {
  //   if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
  //     result += ')'
  //   } else {
  //     result += '('
  //   }
  // }
  // return result;

  return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}


console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))