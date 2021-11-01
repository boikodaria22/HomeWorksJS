var addeter = (function(n) {
  return function(num) {
    return num + n;
  };
})(+prompt('Введите число в замыканиии n'));

addeter(+prompt('Введите второе число'));
