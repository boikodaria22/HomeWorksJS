var perol = '12345678'

var checkPassword = ((function(password) {
  return function(str) {
    return str === password
  };
})(parol));
checkPassword('12345678');
