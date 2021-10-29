var product = {
  name: 'Iphone X',
  id: 1,
  price: 1000,
  discount: 10,
  get discountPrice() {
    return this.price - this.price * (this.discount / 100);
  },
  set discountPrice(newPrice) {
    this.price = newPrice + newPrice * (this.discount / 100);
  }
};