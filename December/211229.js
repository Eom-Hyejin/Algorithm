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