function inArray (array1, array2) {
  // let arr = []
  // for(let i = 0; i < array2.length; i++) {
  //   for(let j = 0; j < array1.length; j++) {
  //     if(array2[i].includes(array1[j]) && !arr.includes(array1[j])) {
  //       arr.push(array1[j])
  //     }
  //   }
  // }
  // return arr.sort()
  return array1.filter((el) => array2.find((ele) => ele.match(el))).sort()
}


console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))




function longestConsec (strarr, k) {
  if (k > strarr.length || k <= 0) return '';
    
  let longStr = '';
  let newStr = '';
  
  for (let i = 0; i < strarr.length; i++){
    newStr = strarr.slice(i, i+k);
    if (newStr.join('').length > longStr.length ){
      longStr = newStr.join('');
    }
  }
  return longStr;
}


// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))
console.log(longestConsec([ 'wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu' ], 2))




function reverseWords (str) {
  return str.split(" ").reverse().join(" ")
}




function invert (arr) {
  return arr.map((el) => -1*el)
}


console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([0]))