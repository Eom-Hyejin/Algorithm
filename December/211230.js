function solution1 (schedule) {
  let mon = []
  
}


console.log(solution1([["MO 12:00 WE 14:30", "MO 12:00", "MO 15:00", "MO 18:00"], 
["TU 09:00", "TU 10:00", "TU 15:00", "TU 18:00"], 
["WE 09:00", "WE 12:00", "WE 15:00", "WE 18:00"], 
["TH 09:30", "TH 11:30", "TH 15:00", "TH 18:00"], 
["FR 15:00", "FR 15:00", "FR 15:00", "FR 15:00"]]))




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