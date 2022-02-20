class Form{
  constructor(){
   this.input = createInput("name");
   this.button = createButton("Play");
   this.tittle = createElement('h2');
   this.tittle2 = createElement('h1');
   this.button2 = createButton("Restart");
  }

//La función para ocultar los botones y demás objetos para q se pase a la siguiente pantalla
hide(){
this.tittle.hide();
this.tittle2.hide();
this.input.hide();
this.button.hide();
}

display(){
//Los botones para poner el nombre y el botón de play
this.input.position(displayWidth/2, displayHeight/2 -80);
this.button.position(displayWidth/2 + 130, displayHeight/2 -50);
//El botón de reinicio
this.button2.position(displayWidth-100,20);

//El título del juego
this.tittle2.html("Air acrobaticts");
this.tittle2.position(displayWidth/2 -100, displayHeight/2 -250);

//El fondo del cuestionario (Poner Name y Play)
background(bg2Img);

//La función para q se pueda presionar el botón con el mouse
this.button.mousePressed(()=>{
  //Para el nombre del jugador y el conteo de jugadores
  player.name = this.input.value();
  playerCount+=1;
  player.index = playerCount;
  player.updatePlayers(playerCount);
  player.updateName();

  //El título de bienvenida
  this.tittle.html("Hola bienvenido "+player.name);
  this.tittle.position(displayWidth/2 -70, displayHeight/4);
});

//El botón de reinicio
this.button2.mousePressed(()=>{
  player.updatePlayers(0);
  game.updateState(0);
  Player.updateScore(0);
});
}





//
}