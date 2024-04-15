

function setup() {
  createCanvas(400, 400);
  pnum = 4    //number of truchet tiles on pattern
  psize = width/pnum;   //size of truchet tile in pixels
  cellsize = 8 //pixels per sticth
  noFill();
  strokeWeight(1);
  stroke(0);
  pattern();
}

function pattern(){
  drawborders();
  
  for(i = 0; i < width; i += pnum){
    for(j = 0; j < height; j += pnum){
      tile(i,j,cellsize);
    }
  }
}

function drawborders(){
  for(i = 0;i < width;  i += cellsize){
    for(j = 0; j < height; j += cellsize){
      square(i,j,cellsize); 
    } 
  }
}

function tile(x,y,size){//placeholder tile function
  fill("purple");
  noStroke();
  halfX = x + size/2
  halfY = y + size/2
  square(x,y,size);
  stroke("green");
  strokeWeight(size/3)
  arc(x+size,y+size,size,size,PI,PI+HALF_PI);
  arc(x,y,size,size,2*PI,HALF_PI);
  
  noFill();
  stroke("white");
  strokeWeight(size/20)
  arc(x+size,y+size,size,size,PI,PI+HALF_PI);
  arc(x,y,size,size,2*PI,HALF_PI);
}
  
  
