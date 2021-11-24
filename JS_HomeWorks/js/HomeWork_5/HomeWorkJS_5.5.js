function rangeFunc(start, end){
   if(start > end){
        return 'Ошибка! Start не должен быть больше End';
    } else if(start === end){
        return end;
    } else {
        return ([start].concat(rangeFunc(++start, end))).join(', ');
    } 
}

rangeFunc(1, 5);
