var figures = [];
figures[10] = {
  figureType: 'rectangle',
  weight: 100,
  height: 50
};
figures.fill({
  figureType: 'circle',
  radius: 5
}, 0, 10);

function checkFigureType() {
  return this.figureType === 'rectangle' ? this.weight * this.height : this.figureType === 'circle' ? Math.round(Math.pow(this.radius, 2) * Math.PI) : 'Figure Type Error';
}
for (var i = 0; i < figures.length; i++) {
  console.log(`Фигура №${i} имеет площадь ${checkFigureType.call(figures[i])}`);
}