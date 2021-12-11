function count (string) {
  // let result = {}
  // for(let i = 0; i < string.length; i++) {
  //   if(result[string[i]] === undefined) {
  //     result[string[i]] = 1
  //   } else {
  //     result[string[i]]++
  //   }
  // }
  // return result

  // return string.split('').reduce((counts,char) => {
  //   counts[char] = (counts[char]||0) + 1;
  //   return counts;
  // },{});

  let count = {};
  string.split('').forEach((el) => {
    count[el] ? count[el]++ : count[el] = 1;
  });
  return count;
}


console.log(count('aba'))
console.log(count(''))




function bonusTime(salary, bonus) {
  return bonus ? `£${salary}0` : `£${salary}`
}


console.log(bonusTime(10000, true))
console.log(bonusTime(2, true))
console.log(bonusTime(78, false))