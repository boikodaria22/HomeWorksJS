function globalCheckObject(obj1, obj2) {
  const firstObjectEntries = Object.entries(JSON.parse(JSON.stringify(obj1)));
  const secondObjectEntries = Object.entries(JSON.parse(JSON.stringify(obj2)));
  for (let i = 0; i < firstObjectEntries.length; i++) {
    return ((firstObjectEntries[i][0] === secondObjectEntries[i][0]) && (firstObjectEntries[i][1] === secondObjectEntries[i][1])) ? true : false
  }
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
globalCheckObject(obj1, obj2)