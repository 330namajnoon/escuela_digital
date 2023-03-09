import Game from "../components/game/game.js";
import Control from "../components/control/control.js";
import levels from "./levels.js";
function Index() {
    this.level = levels[0];
    this.game = new Game(this);
    this.control = new Control(this);
   
}

const index = new Index();


export default index;





