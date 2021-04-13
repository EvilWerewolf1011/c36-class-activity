class Game
{
    constructor(){}

    getState(){
        var ref = database.ref('gameState');
        ref.on("value", function (data){
            gameState = data.val();
        } )
    }

    update(state){
        database.ref('/').update({
           gameState : state
        })
    }

    start()
    {

        if(gameState === 0)
        {

            player = new Player();
            player.getCount();

            form = new Form();
            form.display();

        }

    }

}

/*
Firebase db functions:
Read values from the db: .ref(), .on(), .val()
Write/update values to the db: .ref(), .set() or .update()

/{
    gameState : 0,
    playerCount : 0
}

*/