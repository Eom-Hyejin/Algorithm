function removeSmallest (numbers) {
  let min = Math.min(...numbers)
  let idx = numbers.indexOf(min)
  return numbers.filter((el, i) => i !== idx)
}


console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))
console.log(removeSmallest([]))