const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  // let arr = arr1.concat(arr2).sort((a, b) => a-b);
  // k보다 arr1과 arr2의 길이가 더 짧다면????? => 짧은 길이의 마지막 인덱스의 값과 긴 배열의 값을 비교
  let count = 0;
  let left = 0;
  let right = 0; 
  let num;

  while(k > count) {
    if(arr1[left] > arr2[right]) {
      num = arr2[right];
      right++
    } else {
      num = arr1[left];
      left++;
    }
    count++
  }
  return num
};


console.log(getItemFromTwoSortedArrays([1, 1, 2, 10], [2, 3, 7, 12], 7))
console.log(getItemFromTwoSortedArrays([1, 4, 8, 10], [2, 3, 5, 9], 5))




function getMiddle(s){
  let mid = Math.floor(s.length/2)

  if(s.length % 2 === 0) {
    return `${s[mid-1]}${s[mid]}`
  } else {
    return s[mid]
  }
}


console.log(getMiddle("test"),"es")
console.log(getMiddle("testing"),"t")




function findOutlier(integers){
  let odd = [];
  let even = [];

  for(let i = 0; i < integers.length; i++) {
    if(integers[i] % 2 === 0) {
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
  }

  if(odd.length === 1) {
    return odd[0]
  } else if(even.length === 1) {
    return even[0]
  }

  // let odd = integers.filter(el => el%2 !== 0)
  // let even = integers.filter(el => el%2 === 0)

  // return odd.length === 1 ? odd[0] : even[0]
}

console.log((findOutlier([2,6,8,10,3]), 3))
console.log((findOutlier([0,0,3,0,0]), 3))


// function towerBuilder(nFloors) {
//   //늘어난 수 만큼 빈칸이 늘어나야함
//   let tower = '*';
//   let result = ['*']

//   while(nFloors > 1) {
//     tower += '**'
//     result.push(tower)
//     nFloors--
//   }
//   let length = result[result.length-1].length

//   if(result.length > 1) {
//     for(let i = 0; i < result.length-1; i++) {
//       let blank = (length - result[i].length)/2
//       let resLength = result[i].length
//       result[i] = result[i].padEnd(resLength + blank).padStart(resLength + blank*2)
//     }
//   }
//   return result
// }

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))



function highAndLow(numbers){
  let arr = numbers.split(' ')
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  return `${max} ${min}`
}


console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))




// function domainName(url){
//   let arr = url.split('.');
//   if(arr[0].includes('www')) {
//     return arr[1];
//   } if(!arr[0].includes('http')) {
//     return arr[0];
//   }
//   return arr[0].slice(arr[0].indexOf('//')+2, arr[0].length)
// }

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};


console.log(domainName("http://google.com"))
console.log(domainName("https://www.6m-k40u9yvj2cp-fvugt54.org/warez/"))
console.log(domainName("www.xakep.ru"))