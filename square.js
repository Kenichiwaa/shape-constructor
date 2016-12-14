var Shape = require('./Shape.js');

var Square = function(side) {
    this.side = side;
};

Square.prototype = new Shape("square");

module.exports = Square;
