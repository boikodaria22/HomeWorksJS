var user = {
  firstName: 'Daria',
  lastName: 'Boiko',
  birthday: '08/22/1997',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(newFullName) {
    this.firstName = newFullName.substring(0, newFullName.indexOf(' '));
    this.lastName = newFullName.substring(newFullName.indexOf(' '));
  },
  get age() {
    var year = new Date().getFullYear();
    return (+year) - (+this.birthday.substr(-4, 4));
  },
  set age(newAge) {
    var year = new Date().getFullYear();
    this.birthday = this.birthday.substring(0, 6).concat(+year - (+newAge));
  }
};