function scramble (str1, str2) {
  // str1 = str1.split("").sort()
  // str2 = str2.split("").sort()
  // for(let i = 0; i < str2.length; i++) {
  //   if(str1.includes(str2[i])) {
  //     str1.splice(str1.indexOf(str2[i]), 1)
  //     i--
  //     str2.shift()
  //   } 
  // }
  // return str2.length ? false : true

  const obj = str1.split("").reduce((acc, cur) => {
    acc[cur] = (!acc[cur]) ? 1 : acc[cur] + 1
    return acc
  }, {})

  return str2.split("").every((el) => --obj[el] >= 0)
}


console.log(scramble('rkqodlw','world'))
console.log(scramble('katas','steak'))
console.log(scramble('scriptsjava','javascripts'))
console.log(scramble('scriptjavx', 'javascript'))




function solution (input, markers) {
  input = input.split("\n")
  for(let i = 0; i < markers.length; i++) {
    for(let j = 0; j < input.length; j++) {
      if(input[j].includes(markers[i])) {
        input[j] = input[j].slice(0, input[j].indexOf(markers[i]))
      }
    }
  }
  return input.map((el) => el.trim()).join("\n")
}


console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]),
"apples, plums\npears\noranges")
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]),
"Q\nu\ne")