var Shape = function (type) {
  this.type=type;
  this.get_type= function () {
    return this.type;
  };
};

module.exports = Shape;
