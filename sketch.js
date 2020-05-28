var r=100; 
var g=50; 
var b=225;  
function setup() { 
    createCanvas(800,200); 
} 
   
function draw() { 
    background(r,255-g,b);  
    fill("white"); 
    ellipse(mouseX, mouseY, 50, 50); 
} 
  
function mouseMoved() { 
    r = mouseX%255; 
    g = mouseX%255; 
    b = (mouseX%255)+50;
} 