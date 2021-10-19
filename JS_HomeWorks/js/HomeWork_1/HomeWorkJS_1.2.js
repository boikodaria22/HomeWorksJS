// for
var array = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123];
var n = 0;
for (var i = 0; i < array.length; i++) {
 !(array[i] % 3) ? n++: '';
}
n > 0 ? console.log(`В данном массиве ${n} чисел кратных 3`) : console.log('В данном массиве нет чисел кратных 3');
// while
var array = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123];
var n = 0;
var i = 0;
while (i < array.length) {
  !(array[i] % 3) ? n++: '';
  i++;
}
n > 0 ? console.log(`В данном массиве ${n} чисел кратных 3`) : console.log('В данном массиве нет чисел кратных 3');
//do...while
var array = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123];
var n = 0;
var i = 0;
do {
 !(array[i] % 3) ? n++: '';
  i++;
}
while (i < array.length);
n > 0 ? console.log(`В данном массиве ${n} чисел кратных 3`) : console.log('В данном массиве нет чисел кратных 3');
