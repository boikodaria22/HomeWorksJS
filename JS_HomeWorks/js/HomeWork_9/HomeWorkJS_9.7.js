function uniqueNumOfArr(arr) {
  return arr.filter((value, index, arr) => arr.indexOf(value) === index)
}