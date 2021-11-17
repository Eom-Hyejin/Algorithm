function filter_list(l) {
  return l.filter(el => typeof el === 'number')
}


console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,2,'aasf','1','123',123]))




function anagrams(word, words) {
  let arr = words.filter(el => el.length === word.length)
  let newWord = word.split('').sort().join('')
  
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(newWord === arr[i].split('').sort().join('')) {
      result.push(arr[i])
    }
  }
  return result;
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))