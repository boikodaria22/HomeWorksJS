//1
const phone = {
  name: 'IPhone X',
  price: 2000,
  discount: null,
  quantity: 1,
  weight: null
}

function createObjWithoutNull(phone) {
  const arr = [],
    objPhone = Object.assign({}, phone),
    arrayKeyValue = Object.entries(objPhone)
  for (let i = 0; i < arrayKeyValue.length; i++) {
    if (arrayKeyValue[i][1] !== null) {
      arr.push(arrayKeyValue[i])
    }
  }
  return Object.fromEntries(arr)
}
createObjWithoutNull(phone)

//1.1
const phone = {
  name: 'IPhone X',
  price: 2000,
  discount: null,
  quantity: 1,
  weight: null
}

function createObjWithoutNullDestructuring(phone) {
  const arr = [],
    { ...newObjPhone } = phone,
    arrayKeyValue = Object.entries(newObjPhone)
  for (let i = 0; i < arrayKeyValue.length; i++) {
    if (arrayKeyValue[i][1] !== null) {
      arr.push(arrayKeyValue[i])
    }
  }
  return Object.fromEntries(arr)
}
createObjWithoutNullDestructuring(phone)