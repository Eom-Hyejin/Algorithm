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