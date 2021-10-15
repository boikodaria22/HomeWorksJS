var array = [16, true, 'MetraBit', NaN, {
	name: 'UserName',
	hobby: 'JS'
}, 30, NaN, null, false, 'Vue'];

function myFuncForTypes(array) {
	var str = 0;
	var num = 0;
	var bool = 0;
	var nullType = 0;
	var obj = 0;
	for (var i = 0; i < array.length; i++) {

		if (array[i] === null) {
			nullType++;
		} else {
			switch (typeof(array[i])) {
				case 'string':
					str++;
					break;
					
				case 'number':
					num++;
					break;

				case 'boolean':
					bool++;
					break;

				case 'object':
					obj++;
					break;

				default:
					break;
			}
		}

	}
	console.log(`String: ${str}, number: ${num}, boolean: ${bool}, null: ${nullType}, object: ${obj}.`);
}
myFuncForTypes(array);



