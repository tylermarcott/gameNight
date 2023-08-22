

// NOTE: imported Players class from the following file. Did this easily by typing player and choosing the player class, or player tab
import { Player } from "./models/Player.js"


import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {

  // NOTE: this is the Appstate in our MVCS diagram that is creating the app's data, which in this case is our array of 3 new Players classes

  // NOTE: created 3 new instances of the player class
  players = [
    new Player('Shirley'),
    new Player('Jeff'),
    new Player('Bobbie Boy')
  ];

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

