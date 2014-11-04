var Dancer = function(top, left, timeBetweenSteps) {
  //this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this._off = false;

};


Dancer.prototype.step = function() {

  //console.log('Called step function of Dancer.');
  //if (!this._stop) {
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  //}
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

Dancer.prototype.lineup = function(){

  this._off = true;

  var width = $("body").width();



  if (this.left <= (width/2)) {
    this.left = 300;
  } else {
    this.left = width-300;
    this.$node.addClass('flipped');
  }
  var styleSettings = {
    top: this.top,
    left: this.left,
  };

  this.$node.on('mouseover', function(){
    this.$node.css({'border': '10px solid yellow'});
  });

  this.$node.animate(styleSettings, this._delay);
  //this.$node.css({transform: 'transform:  -webkit-transform: scaleX(-1) filter: FlipH;'});
  
};

Dancer.prototype.getBigger = function(){
  this.$node.addClass('get-bigger');
}




