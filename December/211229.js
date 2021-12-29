function sortFile (files) {
  let result = []
  const reg = /(\d+)/g

  for(let i = 0; i < files.length; i++) {
    result.push({index: i, value: files[i].split(reg)})
  }

  result.sort((a, b) => {
    const aHead = a.value[0].toLowerCase()
    const bHead = b.value[0].toLowerCase()
    if(aHead < bHead) {
      return -1
    } else if (aHead > bHead) {
      return 1
    } else {
      const aNum = Number(a.value[1])
      const bNum = Number(b.value[1])
      if(aNum < bNum) {
        return -1
      } else if (aNum > bNum) {
        return 1
      } else {
        if(a.index < b.index) {
          return -1
        } else {
          return 1
        }
      }
    }
  })

  return result.map((el) => el.value.join(""))
}


console.log(sortFile(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]),
["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"])
console.log(sortFile(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]),
["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"])




function makeMaxNum (number, k) {
  let q = []

  for(let i = 0; i < number.length; i++) {
    const el = number[i]

    while(k > 0 && q[q.length-1] < el) {
      q.pop()
      k--
    }
    q.push(el)
  }

  q.splice(q.length-k, k)
  return q.join("")
}


console.log(makeMaxNum("1924", 2))
console.log(makeMaxNum("1231234", 3))
console.log(makeMaxNum("4177252841", 4))




function permutation (arr, selectNum) {
  let result = []
  if(selectNum === 1) return arr.map(el => [el])

  arr.forEach((v, idx, arr) => {
    const fixer = v
    const restArr = arr.filter((_, index) => index !== idx)
    const permutationArr = permutation(restArr, selectNum-1)
    const combineFixer = permutationArr.map(el => [fixer, ...el])
    result.push(...combineFixer)
  })
  return result
}

function isPrime (num) {
  if(num < 2) return false;
  for (let i =2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false;
  }
  return true;
}

function findPrime(numbers) {
  let count = 0
  const arr = []
  const splitNum = numbers.split("")

  for(let i = 1; i <= numbers.length; i++) {
    arr.push(...permutation(splitNum, i).map((el) => Number(el.join(""))))
  }
  const arrNum = [...new Set(arr)]
  arrNum.forEach((el) => {
    if(isPrime(el)) count++
  })
  return count
}

console.log(findPrime("17"))
console.log(findPrime("011"))