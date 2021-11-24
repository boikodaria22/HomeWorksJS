function ProductCreator() {
}  
let count = 0
ProductCreator.prototype.instanceCounter = ++count
ProductCreator.prototype.id = `Имеет id:${ProductCreator.prototype.instanceCounter}`
ProductCreator.prototype.showProductCreatorInstanceCounter =(()=>count)
