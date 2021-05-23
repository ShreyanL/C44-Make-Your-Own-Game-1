var Sun;
var Mercury;
var cntr_x, cntr_y;

function setup() 
{
  
  createCanvas(displayWidth, displayHeight);
  
  cntr_x = displayWidth / 2;
  cntr_y = displayHeight / 2;

  Sun = new Star(cntr_x, cntr_y, 60, color("yellow")); 
  
  Mercury = new Planet(cntr_x, cntr_y, 15, color("maroon"));     

}

function draw() 
{ 

  background(0);
  
  Sun.display(); 
    
  Mercury.orbitAroundPoint(cntr_x, cntr_y, 100, 5);
  
  
}