 /************ substr **********************/
 function frazeWithoutWord(fraze, word) {
   if (fraze.includes(word)) {
     var indexWord = fraze.indexOf(word);
     return fraze.substr(0, indexWord) + fraze.substr(indexWord + (word.length + 1));
   } else {
     return `${fraze}: ${word}`;
   }
 }
 frazeWithoutWord('mama mila ramu', 'mila')
   /************ substring **********************/
 function frazeWithoutWord(fraze, word) {
   if (fraze.includes(word)) {
     var indexWord = fraze.indexOf(word);
     return= fraze.substring(0, indexWord) + fraze.substring(indexWord + (word.length + 1));
   } else {
     return `${fraze}: ${word}`;
   }
 }
 frazeWithoutWord('mama mila ramu', 'mila')
   /************ slice **********************/
 function frazeWithoutWord(fraze, word) {
   if (fraze.includes(word)) {
     var indexWord = fraze.indexOf(word);
     return fraze.slice(0, indexWord) + fraze.slice(indexWord + (word.length + 1));
   } else {
     return `${fraze}: ${word}`;
   }
 }
 frazeWithoutWord('mama mila ramu', 'mila')
