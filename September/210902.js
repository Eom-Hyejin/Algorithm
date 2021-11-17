  // let count = n - lost.length; 
  // lost = lost.sort((a, b) => a - b)
  // reserve = reserve.sort((a, b) => a - b)

  // let isUsed = Array(lost.length).fill(false)
  // console.log(isUsed)

  // while(reserve.length) {
  //   for(let i = 0; i < lost.length; i++) {
  //     let clothes = reserve.shift()
  //     if((lost[i] === clothes - 1 || lost[i] === clothes + 1) && !isUsed[i]) {
  //       count++
  //       isUsed[i] = true;
  //     }
  //   }
  // }
  // return count;
  function solution1(n, lost, reserve) {
  let count = 0;
  let canUse = Array(n+1).fill(1)
  for(let i=1;i<=n;i++){
      for(let j=0;j<lost.length;j++){
          if(i === lost[j]) canUse[i] = 0;
      }
      for(let j=0;j<reserve.length;j++){
          if(i === reserve[j]) canUse[i] += 1;
      }
  }
  for(let i=1;i<=n;i++){
      if(canUse[i]===0 && canUse[i-1]===2){
          canUse[i-1] = 1;
          canUse[i] = 1;
      }else if(canUse[i]===0 && canUse[i+1]===2){
          canUse[i+1] = 1;
          canUse[i] = 1;
      }
  }
  for(let i =1;i<=n;i++){
      if(canUse[i]>0) count++;
  }
  return count;
}




console.log(solution1(5, [2, 4], [1, 3, 5]))
console.log(solution1(5, [2, 4], [3]))
console.log(solution1(3, [3], [1]))




function solution2(scores) {
  // let sum = [];
  // let nums = []
  // while(sum.length < scores.length) {
  //   for(let i = 0; i < scores.length; i++) {
  //     nums[i] = scores[i][sum.length]
  //   }
  //   if(sum.length === nums.indexOf(Math.max(...nums)) || sum.length === nums.indexOf(Math.min(...nums))) {
  //     nums = nums.slice(0, sum.length).concat(nums.slice(sum.length+1))
  //   }
  //   sum[sum.length] = nums.reduce((acc, cur) => acc + cur)/nums.length
  //   nums = []
  // }
  // let result = ''
  // for(let i = 0; i < sum.length; i++) {
  //   if(sum[i] >= 90) result += 'A'
  //   else if(sum[i] >= 80) result += 'B'
  //   else if(sum[i] >= 70) result += 'C'
  //   else if(sum[i] >= 50) result += 'D'
  //   else result += 'F'
  // }
  // return result;

  let result = '';
  for(let i=0; i< scores.length; i++) {
      let max=0, min=100, sum=0, div=scores.length;
      for(let j=0; j<scores.length; j++) {
          if(i!=j) {
              max = Math.max(max, scores[j][i]);
              min = Math.min(min, scores[j][i]);
          }
          sum += scores[j][i];
      }
      if(scores[i][i]<min || scores[i][i]>max) {
          sum -= scores[i][i];
          div--;
      }
      let avg = sum/div;
      result += (avg>=90 ? "A" : avg>=80 ? "B" : avg>=70 ? "C" : avg >=50 ? "D" : "F");
  }
  return result;
}



console.log(solution2([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]))
console.log(solution2([[50,90],[50,87]]))
console.log(solution2([[70,49,90],[68,50,38],[73,31,100]]))
console.log(solution2([[75, 50, 100], [75, 100, 20], [100, 100, 20]]))




function solution3(a, b) {
  // let result = 0;
  // for(let i = 0; i < a.length; i++) {
  //   result += a[i]*b[i]
  // }
  // return result;
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}


console.log(solution3([1,2,3,4], [-3,-1,0,2]))
console.log(solution3([-1,0,1], [1,0,-1]))




function solution4(d, budget) {
  d = d.sort((a, b) => a- b)
  console.log(d)
}



console.log(solution4([1,3,2,5,4], 9))
console.log(solution4([2,2,3,3], 10))





function solution5(nums) {
  let arr = [...new Set(nums)]  //중복된 내용은 빼고 배열에 다시 담기
  return arr.length >= nums.length/2 ? nums.length/2 : arr.length
}


console.log(solution5([3,1,2,3]))
console.log(solution5([3,3,3,2,2,4]))
console.log(solution5([3,3,3,2,2,2]))



function solution6(s) {
  s = s.split(' ')
  return `${Math.min(...s)} ${Math.max(...s)}`
}


console.log(solution6("1 2 3 4"))
console.log(solution6("-1 -2 -3 -4"))
console.log(solution6("-1 -1"))