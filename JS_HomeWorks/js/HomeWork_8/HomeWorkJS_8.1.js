for (let i = 1; i <= 20; i++) { 
  setTimeout(function() {
      console.log(i)
    }, 1000 * i)
}
let i = 1;
let timer = setInterval(function() {
    console.log(i);
    if (i == 20) {
      clearInterval(timer);
    }
    i++;
  }, 1000)