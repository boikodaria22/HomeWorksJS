var user = {
  firstName: 'Daria',
  lastName: 'Boiko',
  birthday: new Date(1997, 08, 22),
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(newFullName) {
   [this.firstName, this.lastName] = newfullName.split(" ")
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
