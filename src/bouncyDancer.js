var BouncyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="bouncy-dancer"></span>');
  Dancer.apply(this, arguments);
  this._delay = 500;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  //Toggle the span tag using jQuery
  this.$node.toggle();
};
