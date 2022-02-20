var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var pjs, pj1, pj2;

var pj1Img, pj2Img, ave1Img, ave2Img, bgImg, bg2Img;
var bgInfinito;

var num;
var obstacle;
var obstaclesGroup;

function preload(){
  //Precarga de las imágenes de los jugadores
  pj1Img = loadImage("pj1.png");
  pj2Img = loadImage("pj2.png");
  //Precarga de las imágenes de los obstáculos (Aves en este caso)
  ave1Img = loadImage("ave1.png")
  ave2Img = loadImage("ave2.png")
  //Precarga de las imágenes de los fondos
  bgImg = loadImage("fondo.jpg");
  bg2Img = loadImage("fondo2.png");
}

function setup(){
  //Variable para crear el fondo (Sin imagen)
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //Añadir la base de datos
  database = firebase.database();
  //Variables para el gameState (Estados del juego)
  game = new Game();
  game.getState();
  game.start();

 //Variable para crear el fondo de juego infinito
 bgInfinito = createSprite(displayWidth-700,displayHeight-500,100,300);
 bgInfinito.addImage("Fondo",bgImg);
 bgInfinito.scale=3;
 bgInfinito.velocityY = 1;
  
 //Variable para crear un grupo de obstáculos
 obstaclesGroup = new Group();
}


function draw(){
 if(playerCount === 2){
    game.updateState(1);
  }
  if(gameState === 1){
    //Se llama la función hide de la clase Form
    form.hide();
    clear();
    //Se llama la función hide de la clase Play
    game.play();
    //Función para dibujar los sprites
    drawSprites();
  }
  if(gameState === 2){
    console.log("game over");
    game.end();
  }


}

//Función para aparecer los obstáculos
function spawnObstacles(){

  //Crear un swicht
//El if para q los obstáculos se generen luego de un número de frames(cuadros por segundo)
if(frameCount %70 === 0){
  obstacle = createSprite(200,500,50,50);
  obstacle.x = Math.round(random(200,1200));
  obstacle.velocityY = -1;
  obstacle.scale = 0.2;
 //La variable para generar el número aleatorio
  num = Math.round(random(1,2));
 //El switch para q se seleccione la imagen para q el obstáculo aparezca aleatoriamente
 switch(num){
 case 1:  obstacle.addImage(ave1Img);
 break;
 
 case 2: obstacle.addImage(ave2Img);
 break;
 
 default:
 break;
 }
 
 //Se le asigna un tiempo de vida a los obstáculos para que desaparezcan y no se llene la memoria
 obstacle.lifetime = -400; 
 //Añade a los obstáculos a un grupo para el "isTouching"
 obstaclesGroup.add(obstacle);
 }
}