function getAverage (marks) {
  return Math.floor(marks.reduce((acc, cur) => acc + cur, 0)/marks.length)
}


console.log(getAverage([1,2,3,4,5,]))
console.log(getAverage([1,1,1,1,1,1,1,2]))




function reverseWords (str) {
  return str.split(" ").map((el) => el.split("").reverse().join("")).join(" ")
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('apple'))
console.log(reverseWords('a b c d'))
console.log(reverseWords('double  spaced  words'))




function countSmileys (arr) {
  // let haveNotNose = arr.filter((el) => el.length === 2).filter((el) => (el.includes(':') || el.includes(';')) && (el.includes('D') || el.includes(')')))
  // let haveNose = arr.filter((el) => el.length === 3).filter((el) => (el.includes(':') || el.includes(';')) && (el.includes('-') || el.includes('~')) && (el.includes('D') || el.includes(')')))
  
  // return haveNotNose.length + haveNose.length

  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}


console.log(countSmileys([]))
console.log(countSmileys([ ':-)', ';~D', ':-D', ':_D' ]), 3)
console.log(countSmileys([ ':---)', '))', ';~~D', ';D' ]), 1)




function deleteNth (arr, n) {
  // let result = []
  // for(let i = 0; i < arr.length; i++) {
  //   if(result.filter((el) => el === arr[i]).length < n) {
  //     result.push(arr[i])
  //   }
  // }
  // return result
  
  let obj = {}
  return arr.filter((el) => {
    obj[el] = obj[el] ? obj[el] + 1 : 1
    return obj[el] <= n
  })
}


console.log(deleteNth([20,37,20,21], 1))
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))