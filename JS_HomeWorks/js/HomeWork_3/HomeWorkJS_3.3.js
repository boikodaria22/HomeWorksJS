function clipString(str, n) {
  var l = str.length;
  if (l < n) {
    var strRe = str.replace(/ /g, "-");
    var strFirst = strRe[0].toUpperCase() + strRe.slice(1);
    var newStr = strFirst.slice(0, strFirst.length - 1) + strFirst[strFirst.length - 1].toUpperCase();
    return newStr;
  } else if (l > n) {
    var strN = str.slice(0, n);
    return strN.concat('...');
  }
}
clipString('mama mila ramu', 5)
