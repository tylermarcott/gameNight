
import { AppState } from "../AppState.js";
import { playerService } from "../services/PlayerService.js";

// NOTE: importing our playerService method from our service



// NOTE: controller takes in actions from the user/ displays on the DOM. Intermediate between the DOM and our Appstate and other info further back in the MVCS diagram
export class PlayersController {
  constructor() {
    console.log('Player:', AppState.players)

    // NOTE: this is what took me so long to get past the draw, I wasn't calling the draw function in the constructor!!!!
    this.drawPlayers()
  }




  drawPlayers() {

    console.log('drawing player')

    let content = ''

    AppState.players.forEach(player => {
      content += player.playerTemplateCard
    })
    document.getElementById('players').innerHTML = content
  }


  // NOTE: referencing playerService from our service file in order to call scorePoint in service, with our passed playerName argument, and modify the player score. Service is the only file that should be modifying data. Then we draw this instance to the page.

  scorePoint(playerName) {
    console.log(playerName, 'clicked the button')

    playerService.scorePoint(playerName)
    this.drawPlayers()
  }
}