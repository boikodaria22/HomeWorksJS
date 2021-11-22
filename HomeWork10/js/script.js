const title = 'Apple iPhone 12 Pro 256GB'
const productName = Array.from(document.getElementsByClassName('product-title'))
for (let i = 0; i < productName.length; i++) {
    productName[i].textContent = `${title}`
}
/* ==================== Change content ======================*/
const tabs = document.getElementById('tabs')
const buttons = Array.from(tabs.getElementsByClassName('tabs_button'))
const target = Array.from(document.getElementsByClassName('tab_content'))

function change(array, i) {
    array.forEach(element => {
        element.forEach(i => {
            i.classList.remove('active')
        })
        element[i].classList.add('active')
    })
};
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (event) => {
        change([buttons, target], i)
    }
};
/* ==================== Change quantity ======================*/
const price = 1493;
const changeQuantity  = Array.from(document.body.getElementsByClassName('quantity-element'));
 function findElement(id){
     return changeQuantity.find((item) => item.id === id)
 }
const plus = findElement('max') 
const minus = findElement('min') 
let quantity = findElement('quantity')
let priceSum = findElement('price-sum') 
let infoQuantity = findElement('product-quantity')
let infoAmount =findElement('amount-quantity')
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
const contactInfo = ['info_name','info_surname','info_email','info_phone','info_address']
const inputFormContacts = ['inputName','inputSurname','inputEmail','inputPhone','inputAddress']
let indicatorsinputFormContacts = []
let indicatorsContactInfo = []
function getEl(arr){
    for(let i=0;i<arr.length;i++){
        let x = document.getElementById(arr[i])
        if(arr === contactInfo){
        indicatorsContactInfo.push(x)
        }
        else if(arr === inputFormContacts){
            indicatorsinputFormContacts.push(x) 
        }
    }
}
getEl(contactInfo)
getEl(inputFormContacts)
for( let i=0; i<indicatorsinputFormContacts.length;i++){
    indicatorsinputFormContacts[i].oninput= function(event){
        indicatorsContactInfo[i].textContent = indicatorsinputFormContacts[i].value
    }
}
}
