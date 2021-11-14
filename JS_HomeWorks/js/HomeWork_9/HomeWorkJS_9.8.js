function vector(arr) {
  return arr.reduce((a, b) => a.concat(b))
}

vector([[1,2],[1],[1,2,3]]) 