function sumOfSquares(array) {
  const sumEvens = arr => arr.filter(even => !(even % 2)).map(square => Math.sqrt(square)).reduce((a, b) => a + b);
  console.log(sumEvens(array));
}
sumOfSquares([1, 3, 4, 7, 15])