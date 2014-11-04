var BlinkyDancer = function(top, left, timeBetweenSteps) {
  //this = new object of Dancer prototype
  // this.step is overrriden with a new step function
  // keep a reference to the old Dancer step
  //call Dancer constructor passing in the
  //BlinkyDancer instance as an argument,with the other argument
  this.$node = $('<span class="blinky-dancer"></span>');
  //timeBetweenSteps = timeBetweenSteps;
  Dancer.call(this, top, left, timeBetweenSteps);
  //this._delay = 1000;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  //call the old step function/ for override
  Dancer.prototype.step.call(this);

  //Toggle the span tag using jQuery
  this.$node.toggle();
};
