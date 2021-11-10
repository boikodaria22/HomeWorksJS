function StudentsCreator(){
  this.attendedСlassesList = []
 }

 StudentsCreator.prototype.setStudentPresent = function(date){
  let datePresent =  new Date (date);
  datePresent.setHours(0,0,0,0);
  datePresent.setDate(datePresent.getDate()+1)
  const datePresentMs = datePresent.getTime()
  if (!this.attendedСlassesList.indexOf(datePresentMs)){
    console.log('Студент уже был отмечен на эту дату')
  }
  else{ this.attendedСlassesList.push(datePresentMs);
 console.log('Студент был успешно отмечен')}
}

StudentsCreator.prototype.setStudentTodayPresent = function(){
  let newDate = new Date();
   newDate.setHours(0,0,0,0);
   newDate.setDate(newDate.getDate()+1)
   let newDateMs = newDate.getTime()
   if (!this.attendedСlassesList.indexOf(newDateMs)){
    console.log('Студент уже был отмечен на эту дату')
  }
   else{ this.attendedСlassesList.push(newDateMs);
   console.log('Студент был успешно отмечен')}
}

StudentsCreator.prototype.checkAttendInDate = function(dateCheck){
  let newDateCheck =  new Date(dateCheck);
  newDateCheck.setHours(0,0,0,0);
  newDateCheck.setDate(newDateCheck.getDate()+1)
  let newDateCheckMs = newDateCheck.getTime();
   if (!this.attendedСlassesList.indexOf(newDateCheckMs)){
    console.log(1)
  }
   else{ this.attendedСlassesList.push(newDateCheckMs);
   console.log(0)}
}



StudentsCreator.prototype.showAllVisits = function(){
  console.log(`Список дат посещения занятий:`)
  this.attendedСlassesList.forEach(function(array_item, index) {
        let dateArr =new Date(array_item).toISOString();
        console.log(dateArr);
    })
  }