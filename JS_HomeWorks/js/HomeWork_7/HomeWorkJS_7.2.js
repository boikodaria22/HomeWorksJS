var sumsungPhone = {
  name: 'Samsung Galaxy S20',
  price: 800
};
var xiaomiPhone = {
  name: 'Xiaomi 11',
  price: 600
};
var iPhone = {
  name: 'iPhone 12',
  price: 1000
};

function getDiscountAmount(percentDiscount) {
  return this.price !== 0 && this.price > 0 ? this.price * (percentDiscount / 100) : 'Цена товара не задана';
}
var funcSumsungPhone = getDiscountAmount.bind(sumsungPhone);
var funcXiaomiPhone = getDiscountAmount.bind(xiaomiPhone);
var funcIPhone = getDiscountAmount.bind(IPhone);