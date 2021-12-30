function solution5 (P) {
  let result = []
  for(let i = 1; i < P.length; i++) {
    let word = isPanlindrome(String(P[0] + P[i]))
    let word2 = isPanlindrome(String(P[i] + P[0]))
    if(word || word2) {
      result.push(P[i])
    }
  }
  return result
}

function isPanlindrome(word) {
  for(let i = 0; i < Math.floor(word.length / 2); i++) {
    let left = word[i]
    let right = word[word.length-1-i]
    if(left != right) {
      return false
    }
  }
  return true
}



console.log(solution5(["11","111","11","211"]))
console.log(solution5(["21","123","111","11"]))


function solution4 (n, k, bulbs) {
  let num = bulbs.split("").map((el) => {
    if(el === "R") return el = 0
    else if(el === "B") return el = 1
    else return el = 2
  })
  let result = countNum(k, num, 0)
  return result
}

function countNum (k, bulb, count) {
  let idx = bulb.indexOf(1)
  let idx2 = bulb.indexOf(0)
  if(allRed(bulb)) {
    return count
  } else {
    if(idx) {
      let arr = changeLight(idx, idx + k, bulb)
      count++
      countNum(k, arr, count)
    } else if (!idx && idx) {
      let arr2 = changeLight(idx2, idx2 + k, bulb)
      count++
      countNum(k, arr2, count)
    } else {
      return -1
    }
  }  
}

function changeLight (start, end, arr) {
  for(let i = start; i < end; i++) {
    if(arr[i] === 0) {
      arr[i] = 2
    } else if (arr[i] === 1) {
      arr[i] = 0
    } else {
      arr[i] = 1
    }
  }
  return arr
}

function allRed (arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0) {
      return false
    }
  }
  return true
}


console.log(solution4(6, 3, "RBGRGB"))
console.log(solution4(3, 2, "BGG"))
console.log(solution4(4, 2, "GBBG"))