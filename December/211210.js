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