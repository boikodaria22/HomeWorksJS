function checkLengthArray(arrNum, arrStr) {

	if (arrNum.length !== arrStr.length) {
		return 'Массивы имеют разную длину';
	} else {
		var bubblesort = function(arrNum) {
			var done = false;
			while (!done) {
				done = true;
				
				for (var i = 1; i < arrNum.length; i++) {
				
					if (arrNum[i - 1] > arrNum[i]) {
						done = false;
						var tmp = arrNum[i - 1];
						arrNum[i - 1] = arrNum[i];
						arrNum[i] = tmp;
					}
				}
			}
			return arrNum;
		};
		bubblesort(arrNum);
	}

	arrNum.splice(arrNum.length / 2, 0, arrStr);
	var merged = [].concat.apply([], arrNum);
	console.log(merged.slice(0, merged.length / 2));
}

checkLengthArray([73, 4, 11, 234, 58, 134],['js', 'css', 'jq', 'html', 'vue', 'bootstrap']);