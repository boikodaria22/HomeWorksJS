function ProductCreator() {
  this.instanceCounter = ++count
  this.id = `Имеет id:${this.instanceCounter}`
}  
let count = 0
ProductCreator.prototype.showProductCreatorInstanceCounter =(()=>count)
