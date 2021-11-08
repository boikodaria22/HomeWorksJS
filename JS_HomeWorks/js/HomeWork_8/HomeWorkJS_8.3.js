function xBet (){
  this.money = +prompt('Введите сумму ставки:')
  this.money ? console.log(`Ваша ставка ${this.money} принята`):console.log('Ваша ставка не принята');
  
  if(this.money)setTimeout(()=>{
  random() > 0 ? console.log(`Вы выиграли. Ваш выигрыш составляет ${random() * this.money}`):console.log('Вы проиграли. Ваши деньги сгорели');},3000
  )
  }
  let random = function randomValue(){
  return Math.floor(Math.random() * (Math.floor(5) - (Math.ceil(-5)) + 1)) + (Math.ceil(-5));
  }

  xBet()