//for
var array = [16, true, 'MetraBit', NaN, {
	name: 'UserName',
	hobby: 'JS'
}, 30, NaN, null, false, 'Vue'];

for (var i = 0; i < array.length; i++) {
	if (isNaN(array[i]) === true) {
		array[i] = null;
	}
}

console.log('Проверка и изменение массива завершена');
console.log(array);

//while
var array = [16, true, 'MetraBit', NaN, {
	name: 'UserName',
	hobby: 'JS'
}, 30, NaN, null, false, 'Vue'];

var i = 0;
while (i < array.length) {
	if (isNaN(array[i]) === true) {
		array[i] = null;
	}
	i++;
}

console.log('Проверка и изменение массива завершена');
console.log(array);

//do...while
var array = [16, true, 'MetraBit', NaN, {
	name: 'UserName',
	hobby: 'JS'
}, 30, NaN, null, false, 'Vue'];

var i = 0;
do {
	{
		if (isNaN(array[i]) === true) {
			array[i] = null;
		}
		i++;
	}
}
while (i < array.length);

console.log('Проверка и изменение массива завершена');
console.log(array);
