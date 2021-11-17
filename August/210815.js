// let inequalityNumber = function (signs) {
//   signs = signs.split('');
//   const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const min = makeNumber(-1, signs, '', nums, Array(10).fill(false));
//   const max = makeNumber(-1, signs, '', nums.reverse(), Array(10).fill(false));

//   function makeNumber (index, signs, result, nums, usdedNums) {
//     if (index === signs.length) return Number(result);
//     const sign = signs[index];
//     for (let i = 0; i < nums.length; i++) {
//       if (!usdedNums[nums[i]]) {
//         const right = nums[i];
//         const left = result[result.length - 1];
//         console.log(right, left)
//         if ((sign === '<' && left < right) || (sign === '>' && left > right) || index === -1) {
//           usdedNums[right] = true;
//           const made = makeNumber(index + 1, signs, result + right, nums, usdedNums);
//           if (made !== undefined) return made;
//           console.log(made)
//           usdedNums[right] = false;
//         }
//       }
//     }
//   }
//   console.log(max, min)
//   return max - min;
// };


// let inequalityNumber = function (signs) {
//   signs = signs.split(' ');
//   const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const min = makeNumber(-1, signs, nums, [], []); 
//   const max = makeNumber(-1, signs, nums.reverse(), [], []); 
  
//   function makeNumber (index, signs, nums, result, usedNums) {
//     if (index === signs.length) return Number(result.join(''));
//     const sign = signs[index];
//     for (let i = 0; i < nums.length; i++) {
//       if (!usedNums.includes(nums[i])) {
//         const right = nums[i]; // 첫 수가 아닌 경우
//           const left = result[result.length - 1];
//           console.log('left & right & result', left, right, result)
//           if ((sign === '>' && left > right) || (sign === '<' && left < right)) { // 조건을 통과할 경우
//             usedNums.push(right);
//             let made = makeNumber(index + 1, signs, nums, result.concat(right), usedNums);
//             console.log('조건 통과', made, usedNums, sign)
//             if (made) return made;
//             else usedNums = usedNums.filter((e) => e !== right);
//         } else if (index === -1) { // 첫 수인 경우
//             usedNums.push(right);
//             console.log('첫수', right)
//             let made = makeNumber(index + 1, signs, nums, result.concat(right), usedNums);
//             if (made) return made;
//             else usedNums = usedNums.filter((e) => e !== right);
//           }
//         }
//       }
//     }
//     console.log(min, max)
//     return max - min;
//   }


  // let inequalityNumber = function (signs) {
  //   signs = signs.split(' ');
  //   const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   const min = makeNumber(-1, signs, '', nums, Array(10).fill(false));
  //   const max = makeNumber(-1, signs, '', nums.reverse(), Array(10).fill(false));
  
  //   function makeNumber (index, signs, result, nums, usedNums) {
  //     if (index === signs.length) return Number(result);
  //     const sign = signs[index];
  //     for (let i = 0; i < nums.length; i++) {
  //       const right = nums[i];
  //       if (usedNums[right]) continue;
  //         const left = result[result.length - 1];
  //         console.log(left, result)
  //         if ((sign === '<' && left >= right) || (sign === '>' && left <= right)) continue;
  //       usedNums[right] = true;
  //       const made = makeNumber(index + 1, signs, result + right, nums, usedNums);
  //       if (made !== undefined) return made;
  //       usedNums[right] = false;
  //     }
  //   }
  //   console.log(max, min)
  //   return max - min;
  // };


  // let inequalityNumber = function (signs) {
  //   signs = signs.split(' ');
  //   const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   const min = makeNumber(-1, signs, '', nums, Array(10).fill(false));
  //   const max = makeNumber(-1, signs, '', nums.reverse(), Array(10).fill(false));
  
  //   function makeNumber (index, signs, result, nums, usedNums) {
  //     if (index === signs.length) return Number(result);
  //     const sign = signs[index];
  //     for (let i = 0; i < nums.length; i++) {
  //       if (!usedNums[nums[i]]) {
  //         const right = nums[i];
  //         const left = result[result.length - 1];
  //         if ((sign === '<' && left >= right) || sign === '>' && left <= right) continue;
  //         usedNums[right] = true;
  //         const made = makeNumber(index + 1, signs, result + right, nums, usedNums);
  //         if (made !== undefined) return made;
  //         usedNums[right] = false;
  //       }
  //     } 
  //   }
  //   return max - min;
  // };


  let inequalityNumber = function (signs) {
    signs = signs.split(' ');
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const min = makeNumber(-1, signs, '', nums, []);
    const max = makeNumber(-1, signs, '', nums.reverse(), []);
  
    function makeNumber (index, signs, result, nums, usedNums) {
      if (index === signs.length) return Number(result);
      const sign = signs[index];
      for (let i = 0; i < nums.length; i++) {
        if (!usedNums.includes(nums[i])) {
          const right = nums[i];
          const left = result[result.length - 1];
          if ((sign === '<' && left < right) || (sign === '>' && left > right) || !sign) {
            usedNums.push(right);
            usedNums = usedNums.filter(e => e !== right)
            const made = makeNumber(index + 1, signs, result + right, nums, usedNums);
            if (made) return made;
            usedNums.pop();
          }
        }
      } 
    }
    return max - min;
  };

  // const inequalityNumber = function (signs) {
  //   const aux = (idx, signs, nums, digits, isVisited) => {
  //     if (idx === signs.length) {
  //       return parseInt(nums.join(''));
  //     }
  
  //     const sign = signs[idx];
  //     for (let i = 0; i < digits.length; i++) {
  //       const right = digits[i];
  //       if (isVisited[right]) continue;
  
  //       if (idx >= 0) {
  //         const left = nums[nums.length - 1];
  //         if (sign === '<' && left >= right) continue;
  //         if (sign === '>' && left <= right) continue;
  //       }
  
  //       isVisited[right] = true;
  //       const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
  //       if (target !== undefined) {
  //         return target;
  //       }
  //       isVisited[right] = false;
  //     }
  //     return undefined;
  //   };
  
  //   signs = signs.split(' ');
  //   const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   const min = aux(-1, signs, [], digits, Array(10).fill(false));
  //   const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  //   return max - min;
  // };



  // console.log(inequalityNumber('< < > < < > <'))
  // console.log(inequalityNumber ('< >'))
  // console.log(inequalityNumber ('> < >'))
  // console.log(inequalityNumber ( '< > > <'))
  // console.log(inequalityNumber('> > < > < >'))
  // console.log(inequalityNumber ('> > > > < > < > >'))
  // console.log(inequalityNumber('< < < < < < < < <'))
  // console.log(inequalityNumber('> > > > > > > > >'))
