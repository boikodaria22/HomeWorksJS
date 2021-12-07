const rangesArray = [{
  start: '2000-01-23T04:00:00.000+00:00',
  end: '2000-01-23T07:00:00.000+00:00'
}, {
  start: '2000-01-23T09:00:00.000+00:00',
  end: '2000-01-23T11:00:00.000+00:00'
}, {
  start: '2000-01-25T04:00:00.000+00:00',
  end: '2000-01-25T18:00:00.000+00:00'
}, {
  start: '2000-01-27T01:00:00.000+00:00',
  end: '2000-01-27T03:00:00.000+00:00'
}, {
  start: '2000-01-28T03:00:00.000+00:00',
  end: '2000-01-28T07:00:00.000+00:00'
}, {
  start: '2000-01-28T10:00:00.000+00:00',
  end: '2000-01-28T12:00:00.000+00:00'
}];

function booking(rangesArray) {
  let getDatesFromObj = []
  getDatesFromObj.push(rangesArray.map(x => x.start.substring(0, 10)), rangesArray.map(y => y.end.substring(0, 10)));
  let listDates = getDatesFromObj.reduce((a, b) => a.concat(b));
  let uniqueDates = listDates.sort().filter(function(item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
  let day24hours4days = []
  for (let i = 0; i < uniqueDates.length; i++) {
    let startDay = new Date(uniqueDates[i]).setHours(0, 0, 0, 0)
    let endDay = new Date(uniqueDates[i]).setHours(24, 0, 0, 0)
    for (let j = startDay; j < endDay; j += 3600000) {
      day24hours4days.push(j)
    }
  }
  const day24hours1days = [];
  for (let i = 0; i < day24hours4days.length; i += 24) {
    day24hours1days.push(day24hours4days.slice(i, i + 24));
  }
  (function() {
    for (let i = 0; i < day24hours1days.length; i++) {
      rangesArray.forEach(({start, end}) => {
        const startHour = new Date(start).setHours(new Date(start).getHours() - 2)
        const endHour = new Date(end).setHours(new Date(end).getHours() - 2)
        if (day24hours1days[i].includes(startHour) && day24hours1days[i].includes(endHour)) {
          for (let k = 0; k < day24hours1days[i].length; k++) {
            let a = day24hours1days[i].indexOf(startHour)
            let b = day24hours1days[i].indexOf(endHour)
            if (a < k <= b) {
              for (let j = a + 1; j <= b; j++) {
                k = j
                day24hours1days[i][k] = '#'
              }
            }
          }
        }
      })
    }
  })(day24hours1days, rangesArray)
  let stringWithBook = []
  for (let i = 0; i < day24hours1days.length; i++) {
    for (let j = 0; j < day24hours1days[i].length; j++) {
      if (day24hours1days[i][j] !== '#') {
        day24hours1days[i][j] = '*'
      }
    }
    stringWithBook.push(day24hours1days[i].join(''))
  }
  let resultString = []
  for (let i = 0; i < uniqueDates.length; i++) {
    let day = uniqueDates[i].slice(8)
    let month = uniqueDates[i].slice(5, 7)
    resultString.push(`${day}.${month}: ${stringWithBook[i]}`)
  }
  for (let j = 0; j < resultString.length; j++) {
    console.log(resultString[j])
  }
}
  
booking(rangesArray) 

