function generateHashtag (str) {
  if(!str.length) return false
  str = str.split(" ").map((el) => el.length !== 0 ? el[0].toUpperCase() + el.slice(1) : "").join("")
  if(str.length >= 140 || !str) {
    return false;
  } else {
    return `#${str}`
  }
}


console.log(generateHashtag(""))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag("     "))




function produceFib (prod) {
  let n = 0;
  let nPlus = 1
  while(n*nPlus < prod) {
    nPlus += n
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus === prod]
}

console.log(produceFib(4895))
console.log(produceFib(5895))