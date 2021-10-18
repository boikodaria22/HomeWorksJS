function checkLengthArray(arrNum, arrStr) {

	if (arrNum.length !== arrStr.length) {
		return 'Массивы имеют разную длину';
	} else {
   		var sortNum = arrNum.sort((a, b) => {
        	return a < b ? -1 : 1
    		})
   	 }

	arrNum.splice(arrNum.length / 2, 0, arrStr);
	var merged = [].concat.apply([], arrNum);
	console.log(merged.slice(0, merged.length / 2));
}

checkLengthArray([73, 4, 11, 234, 58, 134],['js', 'css', 'jq', 'html', 'vue', 'bootstrap']);
