
function counter() {
  let i = 1
  setTimeout(function func() {
    console.log(i)
    if (i < 20) {
      setTimeout(func, 1000)
    }
    i++
  }, 1000) 
}
function counter(){
let i = 1;
let timer = setInterval(function() {
    console.log(i);
    if (i == 20) {
      clearInterval(timer);
    }
    i++;
  }, 1000)
}

