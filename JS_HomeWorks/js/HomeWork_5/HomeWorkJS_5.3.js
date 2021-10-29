var getCounter = (function() {
  var counter = 10;
  return function() {
    return counter ? --counter : 'Отсчет окончен';
  };
})();
getCounter();