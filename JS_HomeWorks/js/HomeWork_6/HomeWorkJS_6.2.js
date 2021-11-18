function calculatorMaker(firstOperand = 0, secondOperand = 0) {
   this.firstOperand = +firstOperand;
   this.secondOperand = +secondOperand
   this.history = [];
 }
calculatorMaker.prototype.addition = function() {
     this.history.push(`${this.firstOperand}+${this.secondOperand}`);
     return +(this.firstOperand + this.secondOperand)
 };
 calculatorMaker.prototype.subtraction = function() {
     this.history.push(`${this.firstOperand}-${this.secondOperand}`);
     return +(this.firstOperand - this.secondOperand)
 };
 calculatorMaker.prototype.multiplication = function() {
     this.history.push(`${this.firstOperand}*${this.secondOperand}`);
     return +(this.firstOperand * this.secondOperand)

 };
 calculatorMaker.prototype.division = function() {
     this.history.push(`${this.firstOperand}/${this.secondOperand}`);
     return +(this.firstOperand / this.secondOperand)
 };
 calculatorMaker.prototype.showHistory = function() {
   !this.history.length ? console.log('Список операций – пуст') : console.log(`Список операций, выполненный этим экземпляром:\n${this.history.join('\n')}`);
 };

var calculate = new calculatorMaker(8,10)
