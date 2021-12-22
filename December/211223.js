function humanReadable (seconds) {
  // let hours = Math.floor(seconds / 3600)
  // if(hours < 10) {
  //   hours = `0${hours}`
  // }
  // seconds -= hours * 3600
  // let minutes = Math.floor(seconds / 60)
  // if(minutes < 10) {
  //   minutes = `0${minutes}`
  // }
  // seconds -= minutes * 60
  // if(seconds < 10) {
  //   seconds = `0${seconds}`
  // }
  // return `${hours}:${minutes}:${seconds}`

  function pad(x) { 
    return x < 10 ? `0${x}` : x 
  }
  return `${pad(parseInt(seconds / (60*60)))}:${pad(parseInt(seconds / 60 % 60))}:${pad(seconds % 60)}`
}


console.log(humanReadable(0))
console.log(humanReadable(59))
console.log(humanReadable(90))
console.log(humanReadable(3660))
console.log(humanReadable(359999))




function rgb (r, g, b) {
  function convert (color) {
    if(color <= 0) {
      return '00';
    }
    else if(color >= 255) {
      return 'FF';
    }
    return color.toString(16).toUpperCase();
  }
  return convert(r) + convert(g) + convert(b); 
}


console.log(rgb(0, 0, 0))
console.log(rgb(0, 0, -20))
console.log(rgb(300, 255, 255))
console.log(rgb(173, 255, 47))




function solution (list) {
  let result = [[list[0]]]
  for(let i = 1; i < list.length; i++) {
    let a = result[result.length-1]
    if (a[a.length-1] + 1 !== list[i]) {
      result.push([list[i]])
    } else {
      a.push(list[i])
    }
  }
  return result.map((el) => el.length <= 2 ? el : `${el[0]}-${el[el.length-1]}`).join(",")
}


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
"-6,-3-1,3-5,7-11,14,15,17-20")