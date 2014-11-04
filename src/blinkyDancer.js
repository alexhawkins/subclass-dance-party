var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="blinky-dancer"></span>');
  timeBetweenSteps = timeBetweenSteps;
  Dancer.call(this, top, left, timeBetweenSteps);
  this._delay = 1000;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  //call the old step function/ for override
  Dancer.prototype.step.call(this);

  //Toggle the span tag using jQuery
  this.$node.toggle();
};
