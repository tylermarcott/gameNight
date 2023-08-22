
import { AppState } from "../AppState.js";



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




  scorePoint() {
    console.log('clicked')
  }
}