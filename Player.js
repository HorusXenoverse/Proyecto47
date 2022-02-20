class Player{
  constructor(){
  this.index=null;
  this.move = 0;
  this.name=null;
  this.score = 0;
  }

//Función para obtener el conteo de jugadores
getCount(){
  var countRef = database.ref('playerCount');
  countRef.on("value",function(data){playerCount = data.val(); });
}

//Funciones para actualizar el conteo de jugadores y los nombres
updatePlayers(count){
  database.ref('/').update({playerCount: count});
} 
updateName(){
  var playerIndex = "players/player"+this.index;
  database.ref(playerIndex).set({
      name: this.name,
      move:this.move,
      score:this.score
  });
}

//Función estática para la información de los jugadores(para crear los jugadores)
static playerInfo(){
  var playerInf = database.ref('players');
  playerInf.on("value",(data)=>{
  allPlayers = data.val();
  })
}

//Función estática para actualizar el puntaje
static updateScore(score){
  database.ref('/').update({
    score:score
  })
}

}