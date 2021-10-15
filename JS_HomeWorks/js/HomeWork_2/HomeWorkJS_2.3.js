function showStudentsFavoriteLessons() {
  var lessons = ['Математика', 'История', 'Спорт', 'Литература', 'Биология', 'География'];

  function checkStudentFavoriteLessons(studentName) {
    var n = Math.floor(Math.random() * (lessons.length - 1));
    var favoriteLesson = lessons.slice(lessons.length - n);
    if (favoriteLesson.length > 0) {
      return `${studentName}: ${favoriteLesson.join(', ')}`;
    } else {
      return `${studentName}: У этого студента нет любимых предметов`;
    }
  }
  for (var i = 0; i < arguments.length; i++) {
   
    console.log(checkStudentFavoriteLessons(arguments[i]));
  }
}
showStudentsFavoriteLessons('Артур', 'Женя', 'Костя', 'Маша', 'Денис');
