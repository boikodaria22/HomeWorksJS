function countNumbers(array) {
  let num = 0
  const sum = array.reduce(function(accum, value) {
    if (accum <= 20) {
      num ++
      accum += value
    }
    return accum
  }, 0)
  return sum > 20 ? `Сумма ${num} элементов >= 20` : `Сумма ${num} < 20`
}
