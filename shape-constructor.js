//'use strict';

var Pentagon = require('./pentagon.js'),
    Shape = require('./shape.js'),
    Square = require('./square.js'),
    Triangle = require('./triangle.js');


// create new shapes
var pentagon = new Pentagon(1, 2, 3, 4, 5),
    shape = new Shape(),
    square = new Square(4),
    triangle = new Triangle(1, 2, 3);

// Making sure the objects delegates to shape
console.log(pentagon.get_type());
console.log(square.get_type());
console.log(triangle.get_type());
console.log(shape);

console.log('----------------------');

// Testing to make sure an object has in its prototype
//chain the prototype propterty of a constructor
console.log(triangle instanceof Triangle);
console.log(square instanceof Square);
console.log(pentagon instanceof Pentagon);
console.log(shape instanceof Shape);
