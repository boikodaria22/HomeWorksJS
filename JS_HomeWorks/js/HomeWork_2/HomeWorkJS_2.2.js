var product = {
  name: 'iPhone',
  id: 7485,
  price: 1000,
  priceIncrease: function(percent) {
    this.price += this.price * (percent / 100);
    return (`New price: ${this.price}`);
  }
};
product.priceIncrease(30);
