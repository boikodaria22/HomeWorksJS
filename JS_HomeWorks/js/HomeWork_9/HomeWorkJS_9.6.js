
function sumNumbers(arrayOfNum) {
  let value = 0
  let arr = []
  arrayOfNum.forEach(item => {
    arr.push(value += item)
  })
return arr
}
