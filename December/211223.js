function humanReadable (seconds) {
  let hours = Math.floor(seconds / 3600)
  if(hours < 10) {
    hours = `0${hours}`
  }
  seconds -= hours * 3600
  let minutes = Math.floor(seconds / 60)
  if(minutes < 10) {
    minutes = `0${minutes}`
  }
  seconds -= minutes * 60
  if(seconds < 10) {
    seconds = `0${seconds}`
  }
  return `${hours}:${minutes}:${seconds}`
}


console.log(humanReadable(0))
console.log(humanReadable(59))
console.log(humanReadable(90))
console.log(humanReadable(3660))
console.log(humanReadable(359999))