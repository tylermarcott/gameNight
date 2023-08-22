
// NOTE: service box in MVCS diagram. Anything that modifies data goes here. In our current example case, it's going to be changing the score of the player.


/* NOTE: 

- we go from index.html to our controller. 

- our controller talks to our service

- our service can talk to our model (player.js) and appstate

*/

import { AppState } from "../AppState.js";



class PlayerService {




  scorePoint(playerName) {
    let player = AppState.players.find(p => p.name == playerName)

    console.log('service', playerName)

    player.score += 1

    console.log(player)
  }
}

// NOTE: have to export this to use it in our controller
export const playerService = new PlayerService()