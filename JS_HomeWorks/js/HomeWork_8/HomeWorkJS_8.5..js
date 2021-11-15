
  
const rangesArray = [
  {
    start: '2000-01-23T04:00:00.000+00:00',
    end: '2000-01-23T07:00:00.000+00:00'
  },
  {
    start: '2000-01-23T09:00:00.000+00:00',
    end: '2000-01-23T11:00:00.000+00:00'
  },
  {
    start: '2000-01-25T04:00:00.000+00:00',
    end: '2000-01-25T18:00:00.000+00:00'
  },
  {
    start: '2000-01-27T01:00:00.000+00:00',
    end: '2000-01-27T03:00:00.000+00:00'
  },
  {
    start: '2000-01-28T03:00:00.000+00:00',
    end: '2000-01-28T07:000+00:00'
  },
  {
    start: '2000-01-28T10:00:00.000+00:00',
    end: '2000-01-28T12:00:00.000+00:00'
  }
] ;
  function vector(rangesArray) {

    let getDatesFromObj=[]
    let getTimeFromObj = []
 
    getDatesFromObj.push(rangesArray.map(x => x.start.substring(0, 10)),rangesArray.map(y => y.end.substring(0, 10)));
    let listDates = getDatesFromObj.reduce((a, b) => a.concat(b));
    let uniqueDates =  listDates.sort().filter(function(item, pos, ary) {
          return !pos || item != ary[pos - 1];
      });
      getTimeFromObj.push(rangesArray.map(x => x.start.substring(11, 13)),rangesArray.map(y => y.end.substring(11, 13)))
      let preresArr = Array(uniqueDates.length);

      for (let i = 0; i < preresArr.length; i++) {
        preresArr[i] = ''.padEnd(24,'*');
      }
      
      return preresArr;
  }
  





  


