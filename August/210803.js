function DNAStrand(dna){
  let result = ''
  for(let i = 0; i < dna.length; i++) {
    if(dna[i] === 'A') {
      result += 'T'
    } else if(dna[i] === 'T') {
      result += 'A'
    } else if(dna[i] === 'G') {
      result += 'C'
    } else if(dna[i] === 'C') {
      result += 'G'
    }
  }
  return result
}

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))



function friend(friends){
  let result = [];

  for(let i = 0; i < friends.length; i++) {
    if(friends[i].length === 4 && !Number(friends[i])) {
      result.push(friends[i])
    }
  }
  return result;
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))


function persistence(num) {
  return String(num).length > 1 ? 1 + persistence(String(num).split('').reduce((acc, cur) => acc*cur)) : 0
}



console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(999))




var number = function(busStops){
  let plus = 0;
  let minus = 0;
  for(let i = 0; i < busStops.length; i++) {
    plus += busStops[i][0];
    minus += busStops[i][1];
  }
  return plus-minus
}


console.log(number([[10,0],[3,5],[5,8]]),5);



function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for(var i = 0;i < str.length;i++){
    if(vowels.includes(str[i])) {
      vowelsCount++
    }
  }
  return vowelsCount;
}



function disemvowel(str) {
  let arr = str.split('');
  let result = []
  let trolls = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']
  
  for(let i = 0; i < arr.length; i++) {
    if(!trolls.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result.join('');
}


console.log(disemvowel("This website is for losers LOL!"))
console.log(disemvowel("What are you, a communist?"))

//replace를 한번 써보자!!!!


function findOdd(A) {
  let obj = {};

  for(let i = 0; i < A.length; i++) {
    if(obj[A[i]] === undefined ) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }
  for(let key in obj) {
    if(obj[key] % 2 === 1) {
      return Number(key)
    }
  }
}


console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))





function createPhoneNumber(numbers){
  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`  
}


function likes(names) {
  if(names.length === 0) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return `${names} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length >= 4) {
    return `${names.shift()}, ${names.shift()} and ${names.length} others like this`
  }
}


console.log(likes([]), 'no one likes this')
console.log(likes(['Peter']), 'Peter likes this')
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')



function squareDigits(num){
  if(num === 0) {
    return num
  }

  let arr = String(num).split('')
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]**2
  }
  return Number(arr.join(''))
}


console.log(squareDigits(3212))
console.log(squareDigits(2112))
console.log(squareDigits(0))





function solution(str){
  if(str.length === 0) {
    return [];
  }
  let result = [];
  if(str.length % 2 === 1) {
    for(let i = 0; i < str.length - 1; i=i+2) {
      result.push(str.slice(i, i+2))
    }
    result.push(`${str[str.length-1]}_`)
  } else {
    for(let i = 0; i < str.length; i = i+2) {
      result.push(str.slice(i, i+2))
    }
  }
  return result;
}



console.log(solution("abcdef"))
console.log(solution("abcdefg"))
console.log(solution(""))




function spinWords(string){
  let arr = string.split(' ')
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 5) {
      arr[i] = arr[i].split('').reverse().join('')
    }
  }
  return arr.join(' ')
}


console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("You are almost to the last test"))





function arrayDiff(a, b) {
  // if(a.length === 0) {
  //   return [];
  // }
  // if(b.length === 0) {
  //   return a;
  // }
  // let result = [];
  // for(let i = 0; i < a.length; i++) {
  //   if(!b.includes(a[i])) {
  //     result.push(a[i])
  //   }
  // }
  // return result;
  
  return a.filter(el => !b.includes(el))
}


console.log(arrayDiff([], [4,5]))
console.log(arrayDiff([1,8,2], []))
console.log(arrayDiff([1,2,3], [1,2]))