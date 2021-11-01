var obj = {
  firstOperand: undefined,
  secondOperand: undefined,
  setValues: function() {
    this.firstOperand = +prompt("Enter first value");
    this.secondOperand = +prompt("Enter second value");
    this.firstOperand && this.secondOperand ? console.log(`Первое число: ${ this.firstOperand}\nВторое число: ${ this.secondOperand}`) : undefined;
  },
  sumValue: function() {
    return !(isNaN(this.firstOperand && this.secondOperand) || !this.firstOperand || !this.secondOperand) ? (this.firstOperand + this.secondOperand) : 'Числа не заданы';
  },
  multiplyValues: function() {
    return !(isNaN(this.firstOperand && this.secondOperand) || !this.firstOperand || !this.secondOperand) ? (this.firstOperand * this.secondOperand) : 'Числа не заданы';
  },
}
