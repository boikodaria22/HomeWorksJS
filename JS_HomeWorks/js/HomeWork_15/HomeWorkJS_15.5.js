function checkObjectKeysAndValues(obj1, obj2) {
  const arr = []
  const firstObject = Object.entries(obj1);
  const secondObject = Object.entries(obj2);
  for (let i = 0; i < firstObject.length; i++) {
    if ((firstObject[i][0] === secondObject[i][0]) && (firstObject[i][1] === secondObject[i][1])) {
      const keyValue = []
      keyValue.push(firstObject[i][0], firstObject[i][1])
      arr.push(keyValue)
    }
  }
  return obj = Object.fromEntries(arr)
}


const obj1 = {
  name: 'Dasha',
  age: 12,
  hobby: 'JS'
}
const obj2 = {
  name: 'Dasha',
  age: 22,
  hobby: 'JS'
}

checkObjectKeysAndValues(obj1, obj2)