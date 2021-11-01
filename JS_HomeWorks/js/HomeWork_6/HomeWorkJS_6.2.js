   function calculatorMaker(firstOperand = 0, secondOperand = 0) {
     this.firstOperand = +firstOperand;
     this.secondOperand = +secondOperand;
     this.history = [];
     this.checkOperand = function(firstOperand, secondOperand) {
       return (this.firstOperand instanceof Number || typeof this.firstOperand === 'number' && !isNaN(this.firstOperand)) && (this.secondOperand instanceof Number || typeof this.secondOperand === 'number' && !isNaN(this.secondOperand)) ? true : false;
     }
   }
   calculatorMaker.prototype.addition = function() {
     if (this.checkOperand()) {
       this.history.push(`${this.firstOperand}+${this.secondOperand}`);
       return +(this.firstOperand + this.secondOperand)
     } else {
       console.log('Not a number');
     }
   };
   calculatorMaker.prototype.subtraction = function() {
     if (this.checkOperand()) {
       this.history.push(`${this.firstOperand}-${this.secondOperand}`);
       return +(this.firstOperand - this.secondOperand)
     } else {
       console.log('Not a number');
     }
   };
   calculatorMaker.prototype.multiplication = function() {
     if (this.checkOperand()) {
       this.history.push(`${this.firstOperand}*${this.secondOperand}`);
       return +(this.firstOperand * this.secondOperand)
     } else {
       console.log('Not a number');
     }
   };
   calculatorMaker.prototype.division = function() {
     if (this.checkOperand()) {
       this.history.push(`${this.firstOperand}/${this.secondOperand}`);
       return +(this.firstOperand / this.secondOperand)
     } else {
       console.log('Not a number');
     }
   };
   calculatorMaker.prototype.showHistory = function() {
     !this.history.length ? console.log('Список операций – пуст') : console.log(`Список операций, выполненный этим экземпляром:\n${this.history.join('\n')}`);
   };
var calculate = new calculatorMaker(8,10)
