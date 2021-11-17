function isValidWalk(walk) {
  let ns = 0;
  let we = 0;

  for(let i = 0; i < walk.length; i++) {
    if(walk[i] === 's') ns++
    if(walk[i] === 'n') ns--
    if(walk[i] === 'w') we++
    if(walk[i] === 'e') we--
  }
  return walk.length === 10 && ns === 0 && we === 0;
}



console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']))





function iqTest(numbers){
  numbers = numbers.split(' ')
  let odd = numbers.filter(el => el % 2 === 1)
  let even = numbers.filter(el => el % 2 === 0)

  if(odd.length === 1) {
    return numbers.indexOf(odd[0]) + 1
  } else {
    return numbers.indexOf(even[0]) + 1
  }
}


console.log(iqTest("2 4 7 8 10"))
console.log(iqTest("1 2 2"))




function toCamelCase(str){
  if(str.length === 0) {
    return ''
  }
  let result
  if(str.includes('_')) {
    str = str.split('_')
    result = str.shift()
    result += str.map(el => el[0].toUpperCase() + el.slice(1)).join('')
  }
  else {
    str = str.split('-')
    result = str.map(el => el[0].toUpperCase() + el.slice(1)).join('')
  }
  return result
}


console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase('the-Stealth-Warrior'))
console.log(toCamelCase("A-B-C"))




String.prototype.toJadenCase = function () {
  let newStr = "";
  
  this.split(" ").forEach(function(s) { 
      newStr = newStr + " " + s.substring(0,1).toUpperCase() + s.substring(1); 
  });

  return newStr.substr(1);
};


console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

