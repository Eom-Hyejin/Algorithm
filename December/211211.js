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




function cakes (recipe, available) {
  // let recipeKey = Object.keys(recipe)
  // let availableKey = Object.keys(available)
  // if(!availableKey.includes(...recipeKey)) {
  //   return 0
  // }
  // let result = []
  // for(let i = 0; i < recipeKey.length; i++) {
  //   result.push(Math.floor(available[recipeKey[i]] / recipe[recipeKey[i]]))
  // }
  // return Math.min(...result)
  
  return Math.min(
    ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
  )
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))
