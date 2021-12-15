function checkObjectKeys(obj1, obj2) {
  const firstObjectKey = Object.keys(obj1)
  const secondObjectKey = Object.keys(obj2)
  for (let i = 0; i < firstObjectKey.length; i++) {
    if (firstObjectKey[i] !== secondObjectKey[i])
      return false
  }
  return true
}


const obj1 = {
  name: 'Dasha',
  age: 12,
  hobby: 'JS'
}
const obj2 = {
  name: 'Max',
  age: 22,
  hobby: 'JS'
}
checkObjectKeys(obj1, obj2)