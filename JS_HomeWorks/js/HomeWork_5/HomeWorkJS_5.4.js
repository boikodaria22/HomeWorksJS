function sumArrayElem(arr) {
  return !arr.length ? 0 : arr[0] + sumArrayElem(arr.slice(1));
}
sumArrayElem([1, 2, 3, 4, 5]);