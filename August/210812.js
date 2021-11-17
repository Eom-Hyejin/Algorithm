const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let count = 0;
  let left = 0;
  let right = 0; 
  let num

  while(k > count) {
    if(arr1[left] > arr2[right]) {
      num = arr2[right]
      right++
    } else {
      num = arr1[left]
      left++
    }
    count++
  }
  return num
}


console.log(getItemFromTwoSortedArrays([1, 4, 8, 10], [2, 3, 5, 9], 5))
console.log(getItemFromTwoSortedArrays([1, 1, 2, 10], [2, 3, 7, 12], 7))




function pigIt(str){
  let arr = str.split(' ')
  let result = [];
  let regexr = /[^A-Za-z0-9]/gi
  for(let i = 0; i< arr.length; i++) {
    if(arr[i].length === 1 && regexr.test(arr[i])) {
      result.push(arr[i])
    } else {
      head = arr[i][0]
      tail = arr[i].slice(1)
      result.push(`${tail}${head}ay`)
    }
  }
  return result.join(' ')
}



console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))




function isIsogram(str){
  str = str.toLowerCase()
  let result = [];
  for(let i = 0; i < str.length; i++) {
    if(!result.includes(str[i])) {
      result.push(str[i])
    } else {
      return false;
    }
  }
  return true;
}




console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(""))






const getItemFromTwoSortedArrays2 = function (arr1, arr2, k) {
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (k > 0) {
    let mid = Math.round(k / 2);
    let arr1Move = mid;
    let arr2Move = mid;

    if (arr1Idx === arr1.length) {
      arr2Idx += k;
      break;
    }

    if (arr2Idx === arr2.length) {
      arr1Idx += k;
      break;
    }

    if (arr1Move > arr1.length - arr1Idx) arr1Move = arr1.length - arr1Idx; 
    if (arr2Move > arr2.length - arr2Idx) arr2Move = arr2.length - arr2Idx; 
    if (arr1[arr1Idx + arr1Move - 1] < arr2[arr2Idx + arr2Move - 1]) {
      arr1Idx += arr1Move;
      k -= arr1Move;
    } else {
      arr2Idx += arr2Move ;
      k -= arr2Move;
    }
  }
  let arr1Value = arr1[arr1Idx-1] || 0; 
  let arr2Value = arr2[arr2Idx-1] || 0; 
  return Math.max(arr1Value, arr2Value)
};


console.log(getItemFromTwoSortedArrays2([1, 4, 8, 10], [2, 3, 5, 9], 5), 5)
console.log(getItemFromTwoSortedArrays2([1, 1, 2, 10], [3, 3], 6), 10)
console.log(getItemFromTwoSortedArrays2( [1, 1, 2, 10], [2, 3, 7, 12], 7), 10)





const LPS = function (str) {
  const half = Math.floor(str.length / 2);
  let max = 0;
  for(let i = 1; i <= half; i++) {
    if(str.slice(0, i) === str.slice(str.length - i)) {
      if (max < i) max = i
    }
  }
  return max;
}