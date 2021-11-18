function checkLengthArray(arrNum, arrStr) {
  if (arrNum.length !== arrStr.length) {
    return 'Массивы имеют разную длину';
  }
    var sortNum = arrNum.sort((a, b) => a < b ? -1 : 1)

  arrNum.splice(arrNum.length / 2, 0, arrStr);
  var merged = [].concat.apply([], arrNum);
  return(merged.slice(0, merged.length / 2));
}
checkLengthArray([73, 4, 11, 234, 58, 134], ['js', 'css', 'jq', 'html', 'vue', 'bootstrap']);
