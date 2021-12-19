function twoSum (numbers, target) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }
}


console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([1234,5678,9012], 14690))
console.log(twoSum([2, 2, 3], 4))




function stray (numbers) {
  // for(let i = 0; i < numbers.length; i++) {
  //   if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
  //     return numbers[i]
  //   }
  // }
  
  return numbers.reduce((acc, cur) => acc ^ cur)
}


console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))