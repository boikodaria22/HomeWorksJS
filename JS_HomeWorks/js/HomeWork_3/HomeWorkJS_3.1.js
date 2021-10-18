function checkArrayFunc(...arguments) {
	var arr = [];
	for (var i = 0; i <= arguments.length; i++) {
		if (Array.isArray(arguments[i])) {
			arr.push(arguments[i]);
		}
	}
	var merged = [].concat.apply([], arr);
	merged.push('End');
	merged.unshift('Start');
	console.log(merged.reverse());
}
checkArrayFunc(null, 123, 'JS', ['Nastya', 'Dima', 'Max', 'Masha'], undefined, {}, true, ['Sasha', 'Denis', 'Marina']);
