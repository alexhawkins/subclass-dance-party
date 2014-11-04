var PopDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="pop-dancer"></span>');
  Dancer.apply(this, arguments);
  this._radius = Math.floor(Math.random() * 400);
  this._plus = 0;
  this._delay = 3000;
  this._initialLeft = left;
  this._initialTop = top;
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this._plus += 0.05;
  this.left = this._initialLeft + this._radius * Math.cos(this._plus);
  this.top = this._initialTop + this._radius * Math.sin(this._plus);
  this.setPosition(this.top, this.left);
};

//Toggle the span tag using jQuery
//this.$node.toggle();
