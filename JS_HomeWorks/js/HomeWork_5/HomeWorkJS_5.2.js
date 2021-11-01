var addeter = (function(n) {
  return function(num) {
    return num + (n++);
  };
})(+prompt('Введите n'));
