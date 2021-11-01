var obj = {
  firstOperand: firstOperand,
  secondOperand: secondOperand,
  setValues: function() {
    this.firstOperand = +prompt("Enter first value");
    this.secondOperand = +prompt("Enter second value");
  },
  sumValues: function() {
    return !isNaN(this.firstOperand )&&!isNaN(this.secondOperand) ? (this.firstOperand + this.secondOperand) : 'Числа не заданы';
  },
  multiplyValues: function() {
    return !isNaN(this.firstOperand )&&!isNaN(this.secondOperand) ? (this.firstOperand * this.secondOperand) : 'Числа не заданы';
  },
};
