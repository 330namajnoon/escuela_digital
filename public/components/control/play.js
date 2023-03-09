import createElement from "../../js/createElement.js";

export default function Play(back) {
    this.back = createElement(back,{tagName:"div",className:"play_back"});
    this.play = createElement(this.back,{tagName:"div",className:"play"});
    this.playButton = createElement(this.back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"play_arrow",id:"play_span"});
    this.playButton.addEventListener("click",(e)=> {
        if(this.playButton.innerHTML == "play_arrow") {
            this.playButton.innerHTML = "pause";

         }else{ 
            this.playButton.innerHTML = "play_arrow"; 
            
         }    
    })
}