const phone = {
  name: 'IPhone X',
  price: 2000,
  discount: null,
  quantity: 1,
  weight: null,
  arr: 1
}
const laptop = {
  name: 'Mac',
  price: 8000,
  discount: null,
  quantity: 1,
  weight: null,
  height: null,
  diagonal: 55
}

function getUniqueKeysFromObjects(phone, laptop) {
  const {...newObjPhone } = phone, 
    {...newObjLaptop } = laptop,
    arrayKeyPhone = Object.keys(newObjPhone),
    arrayKeyLaptop = Object.keys(newObjLaptop),
    uniqueKeysInLaptop = arrayKeyPhone.filter(el => arrayKeyLaptop.indexOf(el) < 0),
    uniqueKeysInPhone = arrayKeyLaptop.filter(el => arrayKeyPhone.indexOf(el) < 0),
    uniqueKeysInObjects = uniqueKeysInLaptop.concat(uniqueKeysInPhone)
  if (!uniqueKeysInObjects.length) return true
  return uniqueKeysInObjects
}
getUniqueKeysFromObjects(phone, laptop)