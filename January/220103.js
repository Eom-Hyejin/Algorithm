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




function powerSet (str) {
  let result = [...new Set(str)].sort()
  return result.reduce((res, el) => res.concat(res.map((el2 => [el].concat(el2)))), [[]]).map((el) => el.sort().join("")).sort()
}


console.log(powerSet("abc"))
console.log(powerSet("jjump"))




function rotatedArraySearch (rotated, target) {
  let left = 0,
  right = rotated.length - 1;

  while (left <= right) {
  let middle = parseInt((right + left) / 2);

  if (rotated[middle] === target) {
    return middle;
  }

  if (rotated[left] < rotated[middle]) {
    if (target < rotated[middle] && rotated[left] <= target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  } else {
    if (target <= rotated[right] && rotated[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
      }
    }
  }
  return -1;
}


console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2))
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100))