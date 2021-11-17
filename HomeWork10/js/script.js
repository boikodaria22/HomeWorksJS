const title = 'Apple iPhone 12 Pro 256GB'
const productName = document.querySelectorAll('.product-title')
for (let i = 0; i < productName.length; i++) {
    productName[i].textContent = `${title}`
}
/* ==================== Change content ======================*/
const tabs = document.querySelector('#tabs')
const buttons = tabs.querySelectorAll('.tabs_button')
const target = document.querySelectorAll('.tab_content')

function change(array, i) {
    array.forEach(element => {
        element.forEach(i => {
            i.classList.remove('active')
        })
        element[i].classList.add('active')
    })
};
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        change([buttons, target], i)
    })
};
/* ==================== Change quantity ======================*/
const price = 1493;
const plus = document.querySelector('.max') //кнопка плюс
const minus = document.querySelector('.min') //кнопка -
let input = document.querySelector('.quantity-input') //input field
let quantity = document.querySelector('#quantity') //input field
let priceSum = document.querySelector('#price-sum') //input fiel
let infoQuantity = document.querySelector('.product-quantity')
let infoAmount = document.querySelector('.amount-quantity')
priceSum.textContent = price
infoQuantity.textContent = 0
infoAmount.textContent = 0
total = 0
input = 1
plus.onclick = (event) =>{
    input++;
    quantity.value = input;
    total = priceSum.textContent = price * quantity.value
    infoQuantity.textContent = `${quantity.value}`
    infoAmount.textContent = `${total}`
  }

  minus.onclick = (event) =>{
    input > 0 ? input-- : 0;
    quantity.value = input;
    total = priceSum.textContent = price * quantity.value
    infoQuantity.textContent = `${quantity.value}`
    infoAmount.textContent = `${total}`
  }

/* ==================== Contacts info ======================*/
contacts.oninput = function(event) {
    const infoName = document.getElementById('info_name')
    const infoSurname = document.getElementById('info_surname')
    const infoEmail = document.getElementById('info_email')
    const infoPhone = document.getElementById('info_phone')
    const infoAddress = document.getElementById('info_address')
    infoName.textContent = `${document.getElementById('inputName').value}`
    infoSurname.textContent = `${document.getElementById('inputSurname').value}`
    infoEmail.textContent = `${document.getElementById('inputEmail').value}`
    infoPhone.textContent = `${document.getElementById('inputPhone').value}`
    infoAddress.textContent = `${document.getElementById('inputAddress').value}`
}
