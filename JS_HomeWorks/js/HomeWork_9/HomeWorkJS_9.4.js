function sumNumbersToZero(array) {
  if (!array.includes(0)) {
    return 'Переданный массив не содержит нулей'
  }
  let sum = 0
  array.slice(0, array.indexOf(0)).forEach(function(item) {
    sum += item;
  })
  return sum
}
sumNumbersToZero([1, 2, 3, 0])