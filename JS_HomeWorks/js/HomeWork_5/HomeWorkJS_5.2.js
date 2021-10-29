var addeter = (function(n) {
  var n = 0;
  return function(num) {
    return num + (n++);
  };
})();
addeter(2);