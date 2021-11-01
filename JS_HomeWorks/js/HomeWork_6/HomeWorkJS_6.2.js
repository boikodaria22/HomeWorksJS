function calculatorMaker(firstOperand = 0, secondOperand = 0) {
  this.firstOperand = +firstOperand;
  this.secondOperand = +secondOperand;
  this.history = [];
  this.checkOperand = function(firstOperand, secondOperand) {
    return (this.firstOperand instanceof Number || typeof this.firstOperand === 'number' && !isNaN(this.firstOperand)) && (this.secondOperand instanceof Number || typeof this.secondOperand === 'number' && !isNaN(this.secondOperand)) ? true : false;
  }
}
calculatorMaker.prototype.addition = function() {
  this.checkOperand() ? this.history.push(`${this.firstOperand}+${this.secondOperand}`) : console.log('Not a number');
  return +(this.firstOperand + this.secondOperand)
};
calculatorMaker.prototype.subtraction = function() {
  this.checkOperand() ? this.history.push(`${this.firstOperand}-${this.secondOperand}`) : console.log('Not a number');
  return +(this.firstOperand - this.secondOperand)
};
calculatorMaker.prototype.multiplication = function() {
  this.checkOperand() ? this.history.push(`${this.firstOperand}*${this.secondOperand}`) : console.log('Not a number');
  return +(this.firstOperand * this.secondOperand)
};
calculatorMaker.prototype.division = function() {
  this.checkOperand() ? this.history.push(`${this.firstOperand}/${this.secondOperand}`) : console.log('Not a number');
  return +(this.firstOperand / this.secondOperand)
};
calculatorMaker.prototype.showHistory = function() {
  !this.history.length ? console.log('Список операций – пуст') : console.log(`Список операций, выполненный этим экземпляром:\n${this.history.join('\n')}`);
};
var calculate = new calculatorMaker(8,10)
