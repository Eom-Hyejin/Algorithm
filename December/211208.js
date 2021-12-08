function past (h, m, s) {
  return (h*3600 + m*60 + s)*1000
}


console.log(past(0, 1, 1))
console.log(past(1, 1, 1))
console.log(past(0, 0, 0))
console.log(past(1, 0, 1))




function expandedForm (num) {
  let arr = []
  num = String(num).split('')
  for(let i = 0; i < num.length; i++) {
    if(num[i] !== '0') {
      arr.push(num[i] * Math.pow(10, num.length-1-i))
    }
  }
  return arr.join(" + ")
}


console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))
