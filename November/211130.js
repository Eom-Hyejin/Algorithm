function findMissingLetter (array) {
  // if(array[0] === array[0].toUpperCase()) {
  //   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  //   let idx = str.indexOf(array[0])
  //   let str2 = str.slice(idx, idx+array.length+1)
  //   return str2.split('').filter((el) => !array.includes(el))[0]
  // } else {
  //   let str = 'abcdefghijklmnopqrstuvwxyz'
  //   let idx = str.indexOf(array[0])
  //   let str2 = str.slice(idx, idx+array.length+1)
  //   return str2.split('').filter((el) => !array.includes(el))[0]
  // }
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
}

console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['O','Q','R','S']))



function decodeMorse (morseCode) {
  // let result = '';
  // let array = morseCode.split('  ');
  // let start = [];
  // for (let i = 0; i < array.length ; i++) {
  //   start = array[i].split(' ');
  //   start = start.filter(Boolean)
  //   result += ' '
  //   for (let j = 0; j < start.length; j++) {
  //   result += MORSE_CODE[start[j]]
  //   }
  // }
  // return result.trim()
  return morseCode.trim().split(/  | /).map((el) => MORSE_CODE[el] || ' ').join('');
}

// console.log(decodeMorse(('.... . -.--   .--- ..- -.. .')))



function list (names) {
  // let nameArr = names.map((el) => el.name)
  // let result = ""
  // if (nameArr.length >= 3) {
  //   let arr1 = nameArr.slice(0, nameArr.length - 2)
  //   let arr2 = nameArr.slice(nameArr.length - 2)
  //   for(let i = 0; i < arr1.length; i++) {
  //     result += `${nameArr[i]}, `
  //   }
  //   return `${result}${arr2[0]} & ${arr2[1]}`
  // }
  // else if (nameArr.length === 2) {
  //   return `${nameArr[0]} & ${nameArr[1]}`
  // } 
  // else if (nameArr.length === 1) {
  //   return nameArr[0]
  // } 
  // else {
  //   return ''
  // }
  return names.reduce((prev, current, index, array) => {
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'}]))