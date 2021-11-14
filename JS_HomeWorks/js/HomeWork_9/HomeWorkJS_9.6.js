function sumNumbers(arrayOfNum) {
  let value = 0
  let arr = []
  return arrayOfNum.forEach(item => {
    arr.push(value += item)
  })
}