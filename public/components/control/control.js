import createElement from "../../js/createElement.js";
import Play from "./play.js";
export default function Control(index) {
    this.back = createElement(document.body,{tagName:"div",className:"control_back"});
    this.play = new Play(this.back);

    
}