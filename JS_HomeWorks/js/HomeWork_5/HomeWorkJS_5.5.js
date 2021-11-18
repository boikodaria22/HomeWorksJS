function rangeFunc(start, end, step) {
  if (start > end) {
         return 'Ошибка! Start не должен быть больше End'
   }
            step = step ? step : ''
            if (start < end) {
                step += start++ + ', '
                return rangeFunc(start, end, step)
            }

            return step + end
}
rangeFunc(1, 5);


