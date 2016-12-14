var Shape = require('./Shape.js');

var Triangle = function(side1, side2, side3) {
  this.side1=side1;
  this.side2=side2;
  this.side3=side3;
  };

  Triangle.prototype = new Shape("triangle");

module.exports = Triangle;
