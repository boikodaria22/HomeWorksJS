function Constr(name, age) {
  this.name = name;
  this.age = age;
}

function askQuestion(strWellcome, strQuestion) {
  return `${strWellcome}, ${this.name}!${strQuestion}`;
}
var user1 = new Constr('Дарья', 22);
var user2 = new Constr('Саша', 32);
var user3 = new Constr('Маша', 12);
askQuestion.apply(user1, ['Привет', 'Как дела?']);
askQuestion.apply(user2, ['Хаюшки', 'Как жизнь?']);
askQuestion.apply(user3, ['Приветик', 'Ты покушала?']);