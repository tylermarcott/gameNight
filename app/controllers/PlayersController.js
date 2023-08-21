
import { AppState } from "../AppState.js";



// NOTE: controller takes in actions from the user/ displays on the DOM. Intermediate between the DOM and our Appstate and other info further back in the MVCS diagram
export class PlayersController {
  constructor() {
    console.log('Player:', AppState.players)
  }
}