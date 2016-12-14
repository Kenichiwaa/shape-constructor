var Shape = require('./Shape.js');

var Pentagon = function(side1, side2, side3, side4, side5 ) {
  this.side1=side1;
  this.side2=side2;
  this.side3=side3;
  this.side1=side4;
  this.side2=side5;
    };

Pentagon.prototype = new Shape("pentagon");

module.exports = Pentagon;
