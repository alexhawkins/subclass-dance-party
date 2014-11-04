'use strict';

var Dancer = function(top, left, timeBetweenSteps) {
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  //this._stop = false;
};

Dancer.prototype.step = function() {

  //console.log('Called step function of Dancer.');
  if (!this._stop) {
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
