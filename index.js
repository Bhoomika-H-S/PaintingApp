var fill="#0000FF";
 var ctx;
function getVal(){
const val = document.getElementById('colorpicker').value;
  console.log(val);
  fill=val;
  
}
function getTex(id){

var imgtex=document.getElementById(id);

var pat = ctx.createPattern(imgtex, "repeat");
fill=pat;
}

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();
   rect = {};
  drag = false;

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;
  
  
var canvas=document.getElementById('canvas');
  ctx=canvas.getContext("2d");
  var img=document.getElementById('myimage');

img.onload=function(){
init();
   ctx .drawImage(
    img,
    0,
    0,
   canvas.width,
   canvas.height
  );
};
  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile)



function draw() {
  drawRect();
}

function drawRect() {
ctx.fillStyle = fill; 
   if(drag==false){
   console.log(rect.startX , " " , rect.startY , " " , rect.w ," ", rect.h);
   ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
   
   }
}


function mouseDown(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY - this.offsetTop;
  drag = true;
}

function mouseUp() {
  drag = false;
}
function mouseOver() {
    drag = true;
  }

function mouseMove(e) {
  if (drag) {
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY;
  }
 draw();
}

function init() {
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', mouseMove, false);
  canvas.addEventListener('mouseover', mouseOver, false);
  draw();
}
}


//  JS Fiddle link : https://jsfiddle.net/Bhoomika_H_S/m9gz5hxa/244/