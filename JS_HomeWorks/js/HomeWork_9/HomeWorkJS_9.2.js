function countNumbers(array) {
  const num = []
  const sum = array.sort((a, b) => b - a).reduce(function(accum, value) {
    if (accum <= 20) {
      num.push(value)
      accum += value
    }
    return accum
  }, 0)
  return sum > 20 ? `Сумма ${num.length} элементов >= 20` : `Сумма ${num.length} < 20`
}