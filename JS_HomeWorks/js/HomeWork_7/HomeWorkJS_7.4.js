function ProductCreator() {
ProductCreator.prototype.instanceCounter = ProductCreator.prototype.instanceCounter+1 
this.id =ProductCreator.prototype.instanceCounter 
}  

ProductCreator.prototype.instanceCounter = 0
ProductCreator.prototype.showProductCreatorInstanceCounter =(()=>ProductCreator.prototype.instanceCounter )
