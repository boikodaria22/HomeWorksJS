 /************ substr **********************/
function frazeWithoutWord(fraze, word) {
	if (fraze.includes(word)) {
		var indexWord = fraze.indexOf(word);
		var newString = fraze.substr(0, indexWord ) + fraze.substr(indexWord + (word.length + 1));
		return newString;
	} else {
		return `${fraze}: ${word}`;
	}
}

frazeWithoutWord('mama mila ramu','mila')

 /************ substring **********************/
function frazeWithoutWord(fraze, word) {
	if (fraze.includes(word)) {
		var indexWord = fraze.indexOf(word);
		var newString = fraze.substring(0, indexWord ) + fraze.substring(indexWord + (word.length + 1));
		return newString;
	} else {
		return `${fraze}: ${word}`;
	}
}

frazeWithoutWord('mama mila ramu','mila')

 /************ slice **********************/
function frazeWithoutWord(fraze, word) {
	if (fraze.includes(word)) {
		var indexWord = fraze.indexOf(word);
		var newString = fraze.slice(0, indexWord ) + fraze.slice(indexWord + (word.length + 1));
		return newString;
	} else {
		return return `${fraze}: ${word}`;
	}
}

frazeWithoutWord('mama mila ramu','mila')
