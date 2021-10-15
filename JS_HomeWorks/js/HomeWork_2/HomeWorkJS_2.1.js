var user = {
	name: 'Дарья',
	sayHello: function(wellcome = 'Добрый день') {
		if (typeof(this.name) === 'string' && typeof(this.name) !== undefined && this.name.length !== 0) {
			return (`${wellcome}, ${this.name}!`);
		} else {
			return ('Имя пользователя не указано');
		}
	}
};
user.sayHello('Привет');
