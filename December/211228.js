function landing (land) {
  // let arr = []
  // let q = []
  // for(let i = 0; i < land.length; i++) {
  //   if(!q[q.length-1]) {
  //     arr.push(Math.max(...land[i]))
  //     q.push(land[i].indexOf(Math.max(...land[i])))
  //   } else {
  //     let ex = q.pop()
  //     land[i].splice(ex, 1)
  //     arr.push(Math.max(...land[i]))
  //     q.push(land[i].indexOf(Math.max(...land[i])))
  //   }
  // }
  // return arr.reduce((acc, cur) => acc + cur,0)       문제 해석 오류

  // for(let i =land.length-2; i>=0; i--){
  //   land[i][0] = Math.max(land[i+1][1], land[i+1][2], land[i+1][3])+land[i][0];
  //   land[i][1] = Math.max(land[i+1][0], land[i+1][2], land[i+1][3])+land[i][1];
  //   land[i][2] = Math.max(land[i+1][0], land[i+1][1], land[i+1][3])+land[i][2];
  //   land[i][3] = Math.max(land[i+1][0], land[i+1][1], land[i+1][2])+land[i][3];
  // }
  // return Math.max(...land[0]);
  
  let answer = 0;
    
  for(let i = 0; i < land.length; i++){
    for(let j = 0; j < 4; j++){
        if(i === 0) {
            continue;
        } else {
            let arr = land[i-1].slice();
            arr[j] = 0;
            land[i][j] += Math.max.apply(null, arr);
            answer = Math.max(land[i][j], answer);
        }
      }       
  }
  return answer;
}


console.log(landing([[1,2,3,5]
                    ,[5,6,7,8]  
                    ,[4,3,2,1]]))

console.log(landing([[1,2,3,5]
                    ,[5,6,7,100]  
                    ,[4,3,2,1]]))