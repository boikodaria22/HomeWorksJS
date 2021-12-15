function checkObjectValues(obj) {
  let objectValues = Object.values(obj)
  return objectValues.length ? "object isn't empty" : "object empty"
}

checkObjectValues({}) 