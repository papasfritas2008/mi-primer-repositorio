
var barco;
var barco_movent;
var rio;


function preload(){
 barco_movent = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  createCanvas(600,400);
  barco = createSprite(100,200,20,20);
  barco.addAnimation("movimiento",barco_movent);
  
}

function draw() {
  background("blue");
  


  drawSprite(); 
}