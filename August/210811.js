const primePassword = (curPwd, newPwd) => {
  function isPrime (num) {
    let sqrt = Math.sqrt(num);
    if(num % 2 === 0) return false;
    for(let i = 3; i <= sqrt; i+=2) {
      if(num % i === 0) return false;
    }
    return true;
  }

  let visited = [];
  let next = [[curPwd, 0]]

  while(next.length) {
    let [now, count] = next.shift();
    if(now === newPwd) return count;

    for(let i = 0; i < 4; i++) {
      let arr = [...`${now}`].map(e => Number(e))
      for(let j = 0; j <= 9; j++) {
        if(arr[i] !== j) {
          arr[i] = j
          let made = Number(arr.join(''))
          if(made === newPwd) return count+1;
          if(isPrime(made) && made > 1000 && !visited.includes(made)) {
            visited.push(made)
            next.push([made, count+1])
          }
        }
      }
    }
  }
}




function songDecoder(song){
  return song.replace(/(WUB)+/g, ' ').trim()
}



console.log(songDecoder("AWUBBWUBC"))
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))