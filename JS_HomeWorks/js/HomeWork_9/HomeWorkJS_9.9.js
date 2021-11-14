const arr = ['Masha', 'Sasha', 'Pasha', 1, 10, 'Dasha']

function splitArray(arr, num) {
  const newArr = []
  for (let i = 0; i < arr.length; i += num) {
    newArr.push(arr.slice(i, i + num));
  }
  return newArr
}