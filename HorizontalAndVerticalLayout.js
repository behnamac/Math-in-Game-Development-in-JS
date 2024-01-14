// create a canvas to work with
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// style canvas
canvas.id= "canvas";
canvas.width  = 400;
canvas.height = 400;
canvas.setAttribute("style", "border: 1px solid black;");

// get 2D context
var context = canvas.getContext('2d');

// setup some basic boxes to use for our example
var redBox = {x:0, y:0, width: 25, height: 25, color: "red" };
var blueBox = {x:0, y:0, width: 25, height: 25, color: "blue" };

// draws a box to the canvas
function drawBox(x, y, box){
    context.fillStyle = box.color;
    context.fillRect (x, y, box.width, box.height);
}

var box = redBox;
var BlueBox=blueBox;
var padding=5;
var startX=0

// TODO align boxes
for ( var i = 0; i < 5; i ++ ){
  var x =(box.width+padding)*i+startX;
  var y = 0;
  drawBox(x, y, box);
}

for ( var i = 1; i < 5; i ++ ){
  var x =0;
  var y = (BlueBox.width+padding)*i+startX;
  drawBox(x, y, BlueBox);
}
