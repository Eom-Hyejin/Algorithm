function high (x) {
  // let arr = 'abcdefghijklmnopqrstuvwxyz'.split("")
  // x = x.split(" ")
  // let score = []
  // let count = 0
  // for(let i = 0; i < x.length; i++) {
  //   x[i] = x[i].split('')
  //   for(let j = 0; j < x[i].length; j++) {
  //     count += arr.indexOf(x[i][j]) + 1
  //     score[i] = count
  //   }
  //   count = 0
  // }
  // let max = Math.max(...score)
  // let idx = score.indexOf(max)
  // return x[idx].join("")
  const str = 'abcdefghijklmnopqrstuvwxyz'
  const words = x.split(' ')
  const scores = words.map(x => [...x].map(y => str.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))
  
  return words[scores.indexOf(Math.max(...scores))]
}


console.log(high('what time are we climbing up the volcano'))
console.log(high('man i need a taxi up to ubud'))
console.log(high('aa b'))
console.log(high('d bb'))




function maxSequence (arr) {
  // let compareNum = arr[0]
  // let max = arr[0]

  // for(let i = 1; i < arr.length; i++) {
  //   compareNum = Math.max(compareNum + arr[i], arr[i])
  //   max = Math.max(max, compareNum)
  // }
  // return max > 0 ? max : 0

  let min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}


console.log(maxSequence([]))
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([ -2, -1, -3, -4, -1, -2, -1, -5, -4 ]))