

// NOTE: importing players controller to router.js
import { PlayersController } from "./controllers/PlayersController.js";




import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";



// NOTE: router is controlling what is displayed onto the page I think? different avenues will create different outcomes. See below
export const router = [

  {
    path: '',
    controller: [HomeController, PlayersController],
    // if we want to throw the PlayersController in here with the HomeController we need to clear out the view
    // NOTE: I think this is where I will put in my template to draw to the DOM?
    view: /*html*/``
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  // {
  //   path: '',
  //   controller: PlayersController,
  //   view: ``
  // }
]