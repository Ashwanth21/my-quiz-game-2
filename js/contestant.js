class   Contestant{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    getCount(){
        var contestantref = database.ref('contestants');
    contestantref.on("value",function(data){
      contestants = data.val();
    })
    }
    update(){
        var contestantIndex = "players/player" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
      static getPlayerInfo(){
        var contestantInfoRef=database.ref('players')
        contestantInfoRef.on("value",(data)=>{
          allPlayers=data.val();
        })
         
        
      }
}