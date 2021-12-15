function grow(x) {
  return x.reduce((acc, cur) => acc * cur)
}


console.log(grow([1, 2, 3]))
console.log(grow([4, 1, 1, 1, 4]))
console.log(grow([2, 2, 2, 2, 2, 2]))




function orderWeight (string) {
  let weightNum = string.split(" ").map((el) => [el.split("").reduce((acc, cur) => Number(acc) + Number(cur), 0)])
  let num = string.split(" ")
  for(let i = 0; i < weightNum.length; i++) {
    weightNum[i][1] = num[i]
  }
  let result = []
  weightNum.sort((a, b) => b[0] - a[0])
  console.log(weightNum)  
}


console.log(orderWeight("103 123 4444 99 2000"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))