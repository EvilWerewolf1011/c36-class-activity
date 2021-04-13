class Player
{

    constructor(){}

    getCount(){
        var ref = database.ref('playerCount');
        ref.on("value", function (data){
            playerCount = data.val();
        } )
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
         })
    }
    
    update(name){

        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name : name
        })
    }


}

/*
{
    gameState : 0,
    playerCount : 0,
    player1:{
        name: 'A'
    }
    player2:{
        name: 'B'
    }
    player3:{
        name: 'C'
    }
    player4:{
        name: 'D'
    }
}

*/