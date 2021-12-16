function points (games) {
  games = games.map((el) => el.split(":")).map((ele) => ele[0] > ele[1] ? 3 : ele[0] === ele[1] ? 1 : 0)
  return games.reduce((acc, cur) => acc + cur,0)
}


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4']))