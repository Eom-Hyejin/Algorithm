const merge = function (left, right) { 
	const result = [];
	while (left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
	}
  console.log(result)
  console.log(left)
  console.log(right)
	return [...result, ...left, ...right]; 
}

const mergeSort = function (arr) {
	if (arr.length === 1) return arr;

    let left = arr.slice(0, arr.length/2)
    let right = arr.slice(arr.length/2)

	return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort ([20, -10, -11, 2, 29]))





function order(words){
  return words.split(' ').sort((a, b) => {
    return a.match(/\d/) - b.match(/\d/)
  }).join(' ')
}


// 정규표현식 공부하기

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))