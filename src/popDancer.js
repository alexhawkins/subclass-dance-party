var PopDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="pop-dancer"></span>');
  Dancer.apply(this, arguments);
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  //Toggle the span tag using jQuery
  this.$node.toggle();
};
