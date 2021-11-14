function strMoreThen5(arrStr) {
  return arrStr.filter(str => str.length > 5)
}

function strMoreThen5(arrStr) {
  const str = arrStr.reduce(function(accum, value) {
    if (value.length > 5) {
      accum.push(value)
    }
    return acum
  }, [])
  return str;
}