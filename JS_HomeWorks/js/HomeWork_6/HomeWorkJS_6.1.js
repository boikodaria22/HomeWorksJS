var obj = {
  firstOperand: undefined,
  secondOperand: undefined,
  setValues: function() {
    this.firstOperand = +prompt("Enter first value");
    this.secondOperand = +prompt("Enter second value");
    if (isNaN(this.firstOperand && this.secondOperand)) {
      console.log('Ошибка!Введите числа');
      this.setValues()
    } else {
      console.log(`Первое число: ${ this.firstOperand}\nВторое число: ${ this.secondOperand}`)
    }
  },
  sumValue: function() {
    return this.firstOperand && this.secondOperand ? (this.firstOperand + this.secondOperand) : 'Числа не заданы';
  },
  multiplyValues: function() {
    return this.firstOperand && this.secondOperand ? (this.firstOperand * this.secondOperand) : 'Числа не заданы';
  },
}
