function solution1(s, n) {
  let arr = 'abcdefghijklmnopqrstuvwxyz'

  let result = ''
  for(let i = 0; i < s.length; i++) {
    let idx = arr.indexOf(s[i].toLowerCase())
    if (s[i].match(/[A-Z]/)) {
      result += arr[(idx+n) % 26].toUpperCase()
    } else if (s[i].match(/[a-z]/)){
      result += arr[(idx+n) % 26]
    } else if(idx) {
      result += ' '
    }
  }
  return result;
}



console.log(solution1("AB", 1))
console.log(solution1("z", 1))
console.log(solution1("a B z", 4))




function solution2(n) {
  let count = 1;
  for(let i = 3; i <= n; i+=2) {
    let isPrime = true;
    let sqrt = parseInt(Math.sqrt(i))
    for(let j = 3; j <= sqrt; j+=2) {
      if(i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) count++
  }
  return count
}


console.log(solution2(10))
console.log(solution2(5))





function solution3(n) {
  let count = 0;
  for(let i = 0; i <= n; i++) {
    if(n % i === 0) count += i
  }
  return count;
}



console.log(solution3(12))
console.log(solution3(5))



function solution4(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다` 
}



console.log(solution4(["Jane", "Kim"]))



function solution5(n) {
  return n % 2 === 0 ? '수박'.repeat(n/2) : '수박'.repeat((n-1)/2)+'수'
}


console.log(solution5(3))
console.log(solution5(4))



function solution6(data) {
  const n = data.split(" ");
  const a = Number(n[0]) 
  const b = Number(n[1])
  const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
  // let result = '*'.repeat(a)

  // return `${result}\n`.repeat(b)

}
console.log(solution6('5 3'))




function solution7(s) {
  s = s.toLowerCase()
  let p = 0;
  let y = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'p') p++
    else if(s[i] === 'y') y++
  }
  return p === y
}


console.log(solution7("pPoooyY"))
console.log(solution7("Pyy"))




function solution8(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n)+1)**2 : -1
}


console.log(solution8(121))
console.log(solution8(3))



function solution9(array, commands) {
  let arr = Array(commands.length).fill().map(() =>[])
  let result = []
  for(let i = 0; i < commands.length; i++) {
    arr[i] = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a-b)
    result[i] = arr[i][commands[i][2]-1]
  }
  return result;
}


console.log(solution9([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))




function solution10(participant, completion) {
  participant = participant.sort()
  completion = completion.sort()
  for(let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) return participant[i]
  }
}


console.log(solution10(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))
console.log(solution10(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]))
console.log(solution10(["leo", "kiki", "eden"],["eden", "kiki"]))




function solution11(nums) {
  let count = 0;
  let len = nums.length;

  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      for(let k = j + 1; k < len; k++) {
        const num = nums[i] + nums[j] + nums[k]
        if(isPrime(num)) count++
      }
    }
  }
  return count
}

function isPrime(num) {
  for(let i = 2; i < num/2; i++) {
    if(num % i === 0) return false;
  }
  return true
}



console.log(solution11([1,2,3,4]))
console.log(solution11([1,2,7,6,4]))



function solution12(absolutes, signs) {
  return absolutes.map((el, idx) => signs[idx] === true ? el : el*-1).reduce((acc, cur) => acc + cur)
}



console.log(solution12([4,7,12], [true,false,true]))
console.log(solution12([1,2,3], [false,false,true]))





function solution13(price, money, count){
  let sum = 0
  for(let i = 1; i <= count; i++) {
    sum += price*i
  }
  return money - sum > 0 ? 0 : sum-money
}


console.log(solution13(3, 20, 4))




function solution14(answers) {
  let supoja = [
      [1,2,3,4,5],
      [2,1,2,3,2,4,2,5],
      [3,3,1,1,2,2,4,4,5,5]
  ]
let correct = [0,0,0]
  for(let i=0;i<answers.length;i++) {
      if(answers[i] === supoja[0][i%5]) correct[0]++;
      if(answers[i] === supoja[1][i%8]) correct[1]++;
      if(answers[i] === supoja[2][i%10]) correct[2]++;
  }
let max = Math.max(...correct);
  let res = [];
  for(let j=0;j<correct.length;j++) {
      if(correct[j] === max) {
          res.push(j+1)
      }
  }
  return res
}


