var obj = {
  firstOperand: undefined,
  secondOperand: undefined,
  setValues: function() {
    this.firstOperand = +prompt("Введите первое число");
    this.secondOperand = +prompt("Введите второе число");
    this.firstOperand && this.secondOperand ? console.log(`Первое число: ${ this.firstOperand}\nВторое число: ${ this.secondOperand}`) : undefined;
  },
  sumValue: function() {
    return !(isNaN(this.firstOperand && this.secondOperand) || !this.firstOperand || !this.secondOperand) ? (this.firstOperand + this.secondOperand) : 'Числа не заданы';
  },
  multiplyValues: function() {
    return !(isNaN(this.firstOperand && this.secondOperand) || !this.firstOperand || !this.secondOperand) ? (this.firstOperand * this.secondOperand) : 'Числа не заданы';
  },
}
