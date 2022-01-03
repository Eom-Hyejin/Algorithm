function binarySearch (arr, target) {
  let left = 0
  let right = arr.length - 1

  while(left <= right) {
    let middle = parseInt((left + right) / 2)
    if(arr[middle] === target) {
      return middle
    }
    if(target < arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}


console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 2))
console.log(binarySearch([4, 5, 6, 9], 100))
