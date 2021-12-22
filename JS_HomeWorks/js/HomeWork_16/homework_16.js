//Задание 1
class Product {
  constructor(productId, productName, productPrice, productQuantity, productBrand, productDiscount, productSeller) {
    this.productId = productId,
      this.productName = productName,
      this.productPrice = productPrice,
      this.productQuantity = productQuantity,
      this.productBrand = productBrand,
      this.productDiscount = productDiscount,
      this.productSeller = productSeller
  }
  changePrice(newPrice) {
    if (newPrice < 0)
      return `Price can't be negative`
    if (newPrice > 0)
      this.productPrice = newPrice;
    return 'Price has been changed'
  }
  get productDiscountPrice() {
    return this.productPrice = (this.productPrice - (this.productPrice * (this.productDiscount / 100)))
  }
  set productDiscountPrice(productPrice) {
    if (productPrice > 0)
      this.productPrice = productPrice + (productPrice * (this.productDiscount / 100))
  }
  static addNewMethod(strMethod, func) {
    Product.prototype[strMethod] = func
  }
}

//Задание 2
class User {
  constructor(name, surname, email, password, birthday) {
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.password = password,
    this.birthday = birthday
  }
  changePassword(newPassword) {
    if (newPassword.length < 8)
      return `New password is too short`
    if (!newPassword.match(/[A-Z]/g)) {
      return `New password hasn't any uppercase letters`
    } else {
      this.password = newPassword;
      return 'Your password has been changed'
    }
  }
  changeEmail(newEmail) {
    if (newEmail.indexOf('@') === -1) return `New email is wrong`
    this.email = newEmail;
    return `Your email has been changed`
  }
  calculateAge() {
    if (this.birthday === '') return `This user hasn't any information about birthday`
    const bday = (new Date(this.birthday)).getFullYear()
    return (new Date().getFullYear() - bday)
  }
}


//3
class Сustomer extends User {
  constructor(name, surname, email, password, birthday, cardNumber, wishList = [], cart = []) {
    super(name, surname, email, password, birthday)
    this.cardNumber = cardNumber,
      this.wishList = wishList,
      this.cart = cart
  }
  addProductToWishList(objProduct) {
    if (!(objProduct instanceof Product)) return 'This is not a prtoduct'
    this.wishList.push(objProduct)
    return 'This product has been added to the wish list'
  }
  addProductToСart(objProduct) {
    if (!(objProduct instanceof Product)) return 'This is not a prtoduct'
    this.cart.push(objProduct)
    return 'This product has been added to the your сart'
  }
}

//4
class Seller extends User {
  constructor(name, surname, email, password, birthday, shopName, phoneNumber, workingHours, productList = []) {
    super(name, surname, email, password, birthday)
    this.shopName = shopName,
      this.phoneNumber = phoneNumber,
      this.workingHours = workingHours,
      this.productList = productList
  }
  addProductToProductList(productId, productName, productPrice, productQuantity, productBrand, productDiscount, productSeller) {
    let newProductList = new Product(productId, productName, productPrice, productQuantity, productBrand, productDiscount, productSeller)
    this.productList.push(newProductList)
  }
  removeProductFromProductList(productId) {
    const elem = this.productList.filter(item => item.productId === productId);
    if (!elem) {
      return 'There is no such product in the product list'
    } else {
      this.productList.splice(this.productList.indexOf(elem), 1)
      return 'Product has been removed'
    }
  }
  changeWorkingHours(workingHours) {
    if (!workingHours.length || workingHours === ' ')
      return `New value can’t be an empty string`
    this.workingHours = workingHours
    return 'New working hours have been successfully set'
  }
}
