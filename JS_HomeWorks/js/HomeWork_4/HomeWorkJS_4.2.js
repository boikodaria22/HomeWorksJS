var randomInteger = (function() {
  var arr = [];
  return function(min = 0, max = 50) {
    var num = Math.round(Math.random() * max);
    if (!arr.includes(num)) {
      arr.push(num);
      return arr;
    } else {
      return 'Это число уже есть в массиве!';
    }
  };
})();
randomInteger();
