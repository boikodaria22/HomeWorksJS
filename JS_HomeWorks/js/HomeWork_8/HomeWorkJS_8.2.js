function traficLightsTurnOn(g, y, r, time) {
  function changeColor(color) {
    console.log(color);
  }
  (function() {
    setTimeout(() => {
      console.log('Светофор включен')
    }, 0);
    setTimeout(() => {
      changeColor('green')
    }, 0);
    setTimeout(() => {
      changeColor('yellow')
    }, g * 1000);
    setTimeout(() => {
      changeColor('red')
    }, (g + y) * 1000);
  })();
  let interval = setInterval(() => {
    setTimeout(() => {
      changeColor('green')
    }, 0);
    setTimeout(() => {
      changeColor('yellow')
    }, g * 1000);
    setTimeout(() => {
      changeColor('red')
    }, (g + y) * 1000);
  }, (g + y + r) * 1000);
  if (time % (g + r + y) === 0) {
    setTimeout(() => {
      return clearInterval(interval)
    }, (time - (r + g + y)) * 1000)
  } else if ((time % (g + r + y) > (g + y)) && (time % (g + r + y) < (g + r + y))) {
    let val = time % (g + r + y) - (g + y);
    setTimeout(() => {
      return clearInterval(interval)
    }, (time - (r + g + y)) * 1000);
    setTimeout(() => {
      changeColor('green')
    }, (time - (g + y + val)) * 1000);
    setTimeout(() => {
      changeColor('yellow')
    }, (time - (y + val)) * 1000);
    setTimeout(() => {
      changeColor('red')
    }, (time - val) * 1000);
  } else if (time % (g + r + y) === g) {
    setTimeout(() => {
      return clearInterval(interval)
    }, (time - (r + g + y)) * 1000);
    setTimeout(() => {
      changeColor('green')
    }, (time - g) * 1000);
  } else if (time % (g + r + y) <= g) {
    let value = time % (g + r + y);
    setTimeout(() => {
      return clearInterval(interval)
    }, (time - (r + g + y)) * 1000);
    setTimeout(() => {
      changeColor('green')
    }, (time - value) * 1000);
  } else if (time % (g + r + y) === (g + y)) {
    setTimeout(() => {
      return clearInterval(interval)
    }, (time - (r + g + y)) * 1000);
    setTimeout(() => {
      changeColor('green')
    }, (time - (g + y)) * 1000);
    setTimeout(() => {
      changeColor('yellow')
    }, (time - y) * 1000);
  }
  setTimeout(() => {
    console.log('Светофор выключен')
  }, time * 1000);
}
