function changeColor(color) {
  console.log('traffic-light ', color);
}

function timer(colorTime){
 for (let i = 1; i <= colorTime; i++) { 
  setTimeout(function() {
      console.log(i)
    }, 1000 * i)
    }
}
function main(r, y, g, time) {
  let timerId = setInterval((time)=>{

  console.log('Светофор включен');
  let timeoutId = setTimeout(() => {
   timer(r)
    changeColor('red');setTimeout(() => {
      timer(y)
      changeColor('yellow');setTimeout(() => {
timer(g)
        changeColor('green');setTimeout(() => {
          console.log('Светофор выключен');setTimeout(() => {
            main;setTimeout(() => clearTimeout(timeoutId))
          },1000);
        }, g * 1000);
      }, y * 1000);
    }, r * 1000);
  });
clearInterval(timerId)
},time*1000)
}