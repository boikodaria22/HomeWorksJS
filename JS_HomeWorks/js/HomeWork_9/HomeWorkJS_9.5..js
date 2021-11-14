const studentsMarks = [{
  name: 'John',
  id: 123,
  mark: 98
}, {
  name: 'Baba',
  id: 101,
  mark: 23
}, {
  name: 'yaga',
  id: 200,
  mark: 45
}, {
  name: 'Wick',
  id: 115,
  mark: 75
}]

function nameToUppercase(studentsMarks) {
  return studentsMarks.map(studentName => (studentName.name).toUpperCase())
}

function studentsPassExam(studentsMarks) {
  return (studentsMarks.filter(student => {
    if (student.mark > 50 && student.id > 120) {
      return student.name
    }
  }).map(student => student.name))
}

function sumOfMarks(studentsMarks) {
  return studentsMarks.reduce((accumu, value) => accum + value.mark, 0)
}

function promotionStudentsPassExam(studentsMarks) {
  return studentsMarks.reduce(function(arr, value) {
    if ((value.mark + 15) > 50) {
      arr.push(value.name);
    }
    return arr
  }, [])
}