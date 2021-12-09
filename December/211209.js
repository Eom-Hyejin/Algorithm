function removeSmallest (numbers) {
  let min = Math.min(...numbers)
  let idx = numbers.indexOf(min)
  return numbers.filter((el, i) => i !== idx)
}


console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))
console.log(removeSmallest([]))




function formatDuration (seconds) {
  let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      result = [];

  if (seconds === 0) return 'now';
  
  for (let key in time) {
    if (seconds >= time[key]) {
      let val = Math.floor(seconds/time[key]);
      result.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds %= time[key];
    }
  }
  return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/,' and'+'$1') : result[0]
}


console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))




function bmi(weight, height) {
  let bmi = weight / height ** 2
  console.log(bmi)
  if(bmi <= 18.5) return "Underweight"
  if(bmi <= 25.0) return "Normal"
  if(bmi <= 30.0) return "Overweight"
  if(bmi > 30) return "Obese"
}


console.log(bmi(83, 1.81))