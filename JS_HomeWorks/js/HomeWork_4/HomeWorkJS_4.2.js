var randomInteger = (function() {
  var arr = [];
  return function(min = 0, max = 50) {
    var num = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    if (!arr.includes(num)) {
      arr.push(num);
      return arr;
    } else {
      return 'Это число уже есть в массиве!';
    }
  };
})();
randomInteger();
