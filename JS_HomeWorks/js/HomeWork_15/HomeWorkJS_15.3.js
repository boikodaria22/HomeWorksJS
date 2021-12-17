const laptop = {
  name: 'Mac',
  price: 8000,
  discount: null,
  quantity: 1,
  weight: null,
  height: null,
  diagonal: 55
}

function getObjFirstSecondRestValues(obj) {
  const {...copyObj
  } = obj;
  const arrayValues = Object.values(copyObj)
  if (!arrayValues.length) return 'Object is empty'
  let [firstValue, secondValue, ...restValues] = arrayValues
  const resultObject = Object.assign({}, {
    firstValue,
    secondValue,
    restValues
  })
  return resultObject
}
getObjFirstSecondRestValues(laptop)