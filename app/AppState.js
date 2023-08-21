

// NOTE: imported Players class from the following file. Did this easily by typing player and choosing the player class, or player tab
import { Player } from "./models/Players.js"


import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})



// NOTE: this is an instance that I have created of the class that I created in Players.js
class AppState extends EventEmitter {
  /**@type import('./models/Player.js').Player[] */

  players = new Player("Shirley");
}