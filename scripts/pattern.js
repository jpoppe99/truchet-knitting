cellsize = 8

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(1);
  stroke(0);
  pattern();
}

function pattern(){
  drawborders();
  
}

function drawborders(){
  for(i = 0;i < width;  i += cellsize){
    for(j = 0; j < height; j += cellsize){
      square(i,j,cellsize);
      
    }
    
  }
  
  
}