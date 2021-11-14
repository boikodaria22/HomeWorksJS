const arr = [{
  name: 'Sasha',
  age: 45,
  salary: 1900,
}, {
  name: 'Max',
  age: 21,
  salary: 1500,
}, {
  name: 'Nikita',
  age: 29,
  salary: 800,
}, {
  name: 'Sergey',
  age: 32,
  salary: 2300,
}]

function checkSalary(arr, min) {
  const value = arr.sort((a, b) => a.salary - b.salary).find(array => array.salary < min)
  return value === undefined ? `Работников с зарплатой меньше ${min}$ не найдено` : value
}