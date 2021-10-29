function getMaxElement(arr) {
  if (arr.length > 2) {
    arr.splice(0, 1);
    return getMaxElement([arr[0], getMaxElement(arr)]);
  } else {
    return arr[0] >= arr[1] ? arr[0] : arr[1];
  }
}
getMaxElement([1, 2, 3, 7, 9, 8, 0, 1]);