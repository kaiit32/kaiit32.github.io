// Snow: https://codepen.io/otsukatomoya/pen/gbDxF/

var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('snow'),
    ctx = canvas.getContext('2d'),
    rate = 50,
    amountOfSnow = 1500,
    time,
    count,
    size = 2,
    speed = 10,
    lights = new Array,
    colors = ['#eee'];

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function init() {
  time = 0;
  count = 0;

  for(var i = 0; i < amountOfSnow; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function bubble() {
  ctx.clearRect(0,0,w,h);

  for(var i = 0; i < amountOfSnow; i++) {
    var li = lights[i];

    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size,0,Math.PI*2,false);
    // ctx.fillStyle = li.c;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if(li.x > w) { li.x = 0; }
    if(li.y > h) { li.y = 0; }
    if(li.x < 0) { li.x = w; }
    if(li.y < 0) { li.y = h; }
  }
  if(time < speed) {
    time++;
  }
  timerID = setTimeout(bubble,1000/rate);
}
init();
bubble();


jQuery(function($) {
    var currentMousePos = { x: -1, y: -1 };
    $('.holder').mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
      
        var getOffset = $('img').offset();
        var getWidth = $('img').width() / 2;
        var getHeight = $('img').height() / 2;
        var centerX = getOffset.left + getWidth;
       var centerY = getOffset.top + getHeight;
      
        var rotateAmountX = (currentMousePos.x - centerX) *0.000001;
      var rotateAmountY = (currentMousePos.y - centerY) *0.000001;
      
      if(rotateAmountX > 0.0002){rotateAmountX = 0.0002;}
      if(rotateAmountX < -0.0002){rotateAmountX = -0.0002;}
       if(rotateAmountY > 0.0003){rotateAmountY = 0.0003;}
      if(rotateAmountY < -0.0003){rotateAmountY = -0.0003;}
      
      // console.log(rotateAmountX +', ' +rotateAmountY);
        $('img').css( 'transform', 'matrix3d(1,0,0.00,'+rotateAmountX+',0.00,1,0.00,'+rotateAmountY+',0,0,1,0,0,0,0,1)');
   
      
    });


});


$(document).ready(function(){
   centerImage();
});

var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    centerImage();            
  }, 250);
});

function centerImage(){
  var margTop = $('.holder img').height() / 2;
  $('.holder img').css('margin-top','-' + margTop + 'px');
}