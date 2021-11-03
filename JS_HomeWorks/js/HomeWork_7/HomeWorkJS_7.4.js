function ProductCreator() {}
ProductCreator.prototype.instanceCounter = 0;
ProductCreator.prototype.showProductCreatorInstanceCounter = function() {
  ProductCreator.prototype.instanceCounter++;
  if (this instanceof ProductCreator) {
    this.id = ProductCreator.prototype.instanceCounter;
    console.log(`Это экземпляр имеет id = ${this.id}`);
  }
};