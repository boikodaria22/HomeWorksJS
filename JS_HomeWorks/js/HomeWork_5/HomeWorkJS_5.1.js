var checkPassword = (function(password = '12345678') {
  return function(str) {
    return str === password ? true : false;
  };
})();
checkPassword('12345678');