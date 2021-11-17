function narcissistic(value) {
  // Code me to return true or false
  let arr = (value + '').split('')
  let num = arr.length; 
  
  let result = arr.reduce((acc, cur) => {
    return acc + cur**num;
  }, 0);
  
  if(result === value) {
    return true;
  } else {
    return false;
  }
}


function digital_root(n) {
  let str = String(n)
  let result = 0;
  
  if(str.length === 1) {
    return Number(str);
  } 
  else  if (str.length >= 2){
    for(let i = 0; i < str.length; i++) {
      result = result + Number(str[i])
    }
    return digital_root(result);
  }
}

// function triangle(row) {

//   if(row.length === 1 || Array.isArray(row)) {
//     return row[0]
//   }

//   let arr = [];
//   for(let i = 0; i < row.length - 1; i++) {
//     arr.push(row[i] + row[i+1])
//   } 
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 'BG' || arr[i] === 'GB') {
//       arr[i] = 'R'
//     } if(arr[i] === 'RG' || arr[i] === 'GR') {
//       arr[i] = 'B'
//     } if(arr[i] === 'BR' || arr[i] === 'RB') {
//       arr[i] = 'G'
//     } if(arr[i] === 'RR' || arr[i] === 'BB' || arr[i] === 'GG') {
//       arr[i] = arr[i].slice(1)
//     }
//   }
//   return triangle(arr)
// }


function triangle(row) {
while(row.length > 1) {
  let tempStr = '';

  for(let i = 0; i < row.length - 1; i++) {
    tempStr += color(row[i], row[i + 1]);
  }

  row = tempStr;
}
return row
}

function color(c1, c2) {
const colors = ['B', 'G', 'R'];

if(c1 === c2) {
  return c1;
}
else {
  return colors.filter(c => (c !== c1) && (c !== c2));
}
}




function multiTable(number) {
  let result = '';
  for(let i = 1; i <= 10; i++){
    result += `${i} * ${number} = ${i*number}\n`
  }
  return table.slice(0, -1)
}