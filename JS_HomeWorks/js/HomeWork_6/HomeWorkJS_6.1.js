var obj = {
  firstOperand:undefined,
  secondOperand:undefined,
  setValues() {
    this.firstOperand = +prompt("Enter first value");
    this.secondOperand = +prompt("Enter second value");
  },
  sumValue() {
    return this.firstOperand && this.secondOperand ? (this.firstOperand + this.secondOperand) : 'Числа не заданы';
  },
  multiplyValues() {
    return this.firstOperand && this.secondOperand ? (this.firstOperand * this.secondOperand) : 'Числа не заданы';
  },
};
