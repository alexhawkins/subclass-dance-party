var FightingDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="fighting-dancer"></span>');
  Dancer.apply(this, arguments);
  this._delay = 2000;
};

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constructor = FightingDancer;

FightingDancer.prototype.step = function() {
  //call the old step function/ for override
  Dancer.prototype.step.call(this);

  //Toggle the span tag using jQuery
  //this.$node.toggle();
};
