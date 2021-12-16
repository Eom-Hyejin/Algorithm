function points (games) {
  games = games.map((el) => el.split(":")).map((ele) => ele[0] > ele[1] ? 3 : ele[0] === ele[1] ? 1 : 0)
  return games.reduce((acc, cur) => acc + cur,0)
}


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']))




function sumDigPow (a, b) {
  // let result = []
  // for(let i = a; i <= b; i++) {
  //   let sum = 0
  //   for(let j = 0; j < String(i).length; j++) {
  //     sum += Math.pow(String(i)[j], j+1)
  //     if(i === sum) {
  //       result.push(i)
  //     }
  //   }
  // }
  // return result
  
  let result = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + y ** (i + 1),0) == a)
      result.push(a);
    a++;
  }
  return result;
}


console.log(sumDigPow(1, 10))
console.log(sumDigPow(24, 40))
console.log(sumDigPow(1, 100))
console.log(sumDigPow(10, 100))
console.log(sumDigPow(90, 100))