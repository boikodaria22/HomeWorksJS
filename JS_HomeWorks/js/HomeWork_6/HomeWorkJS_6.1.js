var obj = {
  firstOperand:undefined,
  secondOperand:undefined,
  setValues: function() {
    this.firstOperand = +prompt("Enter first value");
    this.secondOperand = +prompt("Enter second value");
  },
  sumValues: function() {
    return this.firstOperand&& this.secondOperand ? (this.firstOperand + this.secondOperand) : 'Числа не заданы';
  },
  multiplyValues: function() {
    return this.firstOperand && this.secondOperand ? (this.firstOperand * this.secondOperand) : 'Числа не заданы';
  },
};
