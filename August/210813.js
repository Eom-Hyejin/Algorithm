function opposite(number) {
  return number*-1
}


console.log(opposite(1))
console.log(opposite(-7))



function solution(number){
  // let result = 0;
  // for(let i = 0; i < number; i+=3) {
  //   result = result + i
  // } for(let i = 0; i < number; i+=5) {
  //   result = result + i
  // } for(let i = 0; i < number; i+=15) {
  //   result = result - i
  // }
  // return result;
  sum = 0
  for (i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10))





var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))   //정수인지 판단하는 메소드
}



console.log(isSquare(-1))
console.log(isSquare( 3))
console.log(isSquare(25))




function descendingOrder(n){
  return Number(String(n).split('').sort((a, b) => b - a).join(''))
}



console.log(descendingOrder(15))
console.log(descendingOrder(1021))




function accum(s) {
  let arr = s.toLowerCase().split('')
  let result = '';
  for(let i = 0; i < arr.length; i++) {
    result = result + arr[i].toUpperCase() + arr[i].repeat(i) + '-'
  }
  return result.slice(0, -1);
  // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}



console.log(accum("MjtkuBovqrU"))




function XO(str) {
  // str = str.toLowerCase()
  // let xArr = [];
  // let oArr = [];
  // for(let i = 0; i < str.length; i++) {
  //   if(str[i] === 'x') xArr.push(str[i])
  //   if(str[i] === 'o') oArr.push(str[i])
  // }
  // if(xArr.length === oArr.length) {
  //   return true;
  // }
  // return false;
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


console.log(XO("xxOo"))
console.log(XO("xxxm"))
console.log(XO("ooom"))