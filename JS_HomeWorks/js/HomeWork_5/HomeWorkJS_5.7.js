var user = {
  firstName: 'Daria',
  lastName: 'Boiko',
  birthday: new Date(1997, 8, 22),
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(newFullName) {
   [this.firstName, this.lastName] = newFullName.split(" ")
  },
  get age() {
    var year = new Date().getFullYear();
    return (+year) - (+this.birthday.getFullYear());
  },
  set age(newAge) {
    var year = new Date().getFullYear() - newAge;
    var month =  this.birthday.getMonth() -1;
    this.birthday.setFullYear(year,month)
  }
}
