var countFunc= (function () {
  var i = 0;

  return function () {
      i++;
      return i;
  };
})();

console.log(countFunc()); 