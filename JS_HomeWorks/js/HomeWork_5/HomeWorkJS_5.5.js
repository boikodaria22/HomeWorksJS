function rangeFunc(start, end) {
  var res = [];
  if (start === end) {
    return res;
  }
  res.push(start);
  return (res.concat(rangeFunc(start + 1, end))).toString();
}
rangeFunc(1, 5);