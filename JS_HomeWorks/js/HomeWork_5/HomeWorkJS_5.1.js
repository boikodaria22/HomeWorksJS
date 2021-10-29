var checkPassword = (function(password = '12345678') {
  return function(str) {
    return str === password ? Boolean(true) : Boolean(false);
  };
})();
checkPassword('12345678');
