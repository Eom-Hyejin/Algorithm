const LPS = function (str) {
  let half = Math.floor(str.length / 2)
  let head = str.slice(0, half)
  let tail = str.slice(half)

  let result

  if(head === tail) return head.length;

  for(let i = 1; i < tail.length; i++) {
    if(head[0] === tail[i]) {
      if(tail.length % 2 === 1) result = tail.slice(i-1)
    }
  }

  if(!result) return 0

  if(head.includes(result)) return result.length;
  if(result.includes(head)) return head.length;

  return 0
}



console.log(LPS('aaaa'), 2)
console.log(LPS('abbbcc'), 0)
console.log(LPS('aabcdaabc'), 4)
console.log(LPS( 'abcab'), 2)
console.log(LPS('abcdabbb'), 0)



function findShort(s){
  let arr = s.split(' ')
  return Math.min.apply(null, arr.map(e => e.length))
}


console.log(findShort("Let's travel abroad shall we"))




function expression(number, operation){
	if(!operation) {
		return number;
  }
	return operation(number);
}

function zero(operation) { return expression(0, operation); }
function one(operation) { return expression(1, operation); }
function two(operation) { return expression(2, operation); }
function three(operation) { return expression(3, operation); }
function four(operation) { return expression(4, operation); }
function five(operation) { return expression(5, operation); }
function six(operation) { return expression(6, operation); }
function seven(operation) { return expression(7, operation); }
function eight(operation) { return expression(8, operation); }
function nine(operation) { return expression(9, operation); }

function plus(x) {
	return function(y) {
		return y + x;
	}
}
function minus(x) {
	return function(y) {
		return y - x;
	}
}
function times(x) {
	return function(y) {
		return y * x;
	}
}
function dividedBy(x) {
	return function(y) {
		return Math.floor(y / x);
	}
}


console.log(five(plus(two())))
console.log(five(times(five())))
console.log(five(minus(three())))
console.log(five(dividedBy(five())))






function duplicateCount(text){
  let str = text.toLowerCase()
  let obj={}

  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]] === undefined) {
      obj[str[i]] = 1
    } else {
      obj[str[i]]++
    }
  }

  let count = 0
  for(let prop in obj) {
    if(obj[prop] >= 2) {
      count++
    }
  }
  return count
}


console.log(duplicateCount("Indivisibilities"))
console.log(duplicateCount("Indivisibility"))



function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let arr = text.toLowerCase().replace(/(\s*)/g, "").split('')

  let result = ''

  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string' && alphabet.includes(arr[i])) {
      result = result + `${alphabet.indexOf(arr[i]) + 1} `
    }
  }
  return result.slice(0, -1)
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))




const uniqueInOrder=function(iterable){
  let result = [];

  for(let i = 0; i < iterable.length; i++) {
    if(iterable[i] !== iterable[i+1]) {
      result.push(iterable[i])
    }
  }
  return result;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))




const moveZeros = function (arr) {
  let result = arr.filter(el => el === 0);
  let filtered = arr.filter(el => el !== 0)

  return filtered.concat(result)
}


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))