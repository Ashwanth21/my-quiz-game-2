class   Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var constestantsRef = await database.ref('constestantCount').once("value");
        if(constestantsRef.exists()){
          contestants = contestantRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      quiz.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var display_position = 130;
        for(var con in allcontestant){
          if (con === "constestant" + player.index)
            fill("blue")
          else
            fill("green");
  
          display_position+=20;
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
    }
  }