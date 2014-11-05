var BlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="blinky-dancer"></span>');
  Dancer.apply(this, arguments);
  this.$node.on('mouseover', this.getBigger.bind(this));
  this._delay = 5000;
  this.leftIncr = randomize();
  this.topIncr = randomize();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  //call the old step function/ for override
  Dancer.prototype.step.call(this);
  //if this.left > current width of window STOP!
  //if this.top > current height of window STOP!
  var width = $("body").width();
  var height = $("body").height();

  if((this.left > width-25) || (this.left<25)){
    this.leftIncr = this.leftIncr * (-1);
  }

  if((this.top > height-25) || (this.top<25)){
    this.topIncr = this.topIncr * (-1);
  }
  this.left += this.leftIncr;
  this.top += this.topIncr;
  this.setPosition(this.top, this.left);
  //Toggle the span tag using jQuery
  this.$node.toggle();
};

var randomize = function(){
  return Math.sin(Math.random()*10)* 5;
};

