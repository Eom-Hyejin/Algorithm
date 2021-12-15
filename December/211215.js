function grow(x) {
  return x.reduce((acc, cur) => acc * cur)
}


console.log(grow([1, 2, 3]))
console.log(grow([4, 1, 1, 1, 4]))
console.log(grow([2, 2, 2, 2, 2, 2]))




// function orderWeight (strng) {
//   let weightNum = strng.split(" ").map((el) => [el.split("").reduce((acc, cur) => Number(acc) + Number(cur), 0)])
//   let num = strng.split(" ")
//   for(let i = 0; i < weightNum.length; i++) {
//     weightNum[i][1] = num[i]
//   }
//   let result = []
//   let useNum = []
//   weightNum.sort((a, b) => a[0] - b[0])
//   for(let i = 0; i < weightNum.length; i++) {
//     if(!useNum.includes(weightNum[i][0])) {
//       useNum.push(weightNum[i][0])
//       result.push([weightNum[i][1]])
//     } else {
//       result[result.length-1].push(weightNum[i][1])
//     }
//   } 
//   return result.map((el) => el.sort()).join(" ").replace(/,/g, " ")
// }

function digitSum(str) {
  return str.split('').reduce((s, e) => s + parseInt(e), 0)
}

function orderWeight(str) {
  return str.split(' ').sort((a, b) => digitSum(a) - digitSum(b) || a.localeCompare(b)).join(' ');
}


console.log(orderWeight("103 123 4444 99 2000"))
console.log(orderWeight("2000 1234000 44444444 9999 11 11 22 123 10003"))