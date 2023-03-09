import createElement from "../../js/createElement.js";

export default function Avion(pos) {
    this.grid = [];
    this.posicion = pos;
    this.avion = {};

    window.addEventListener("click",(e)=> {
        if(e.pageY < innerHeight/2) {
            this.mover("r");
        }
        if(e.pageY > innerHeight/2 && e.pageX > innerWidth/2) {
            this.mover("d");
        }
        if(e.pageY > innerHeight/2 && e.pageX < innerWidth/2) {
            this.mover("e");
        }
    })
}
Avion.prototype.set = function(grid) {
    this.grid = grid;
    let back = grid[this.posicion.y].back.children[this.posicion.x];
    this.avion = createElement(back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"flight",id:"flight",style:`transform: rotate(${this.posicion.r*90}deg)`});
} 
Avion.prototype.permiso = function() {
    let m = "";
    
    this.mover(m);
}
Avion.prototype.mover = function(m) {
    this.avion.remove();
    switch (m) {
        case "r":
            switch (this.posicion.r) {
                case 0:
                    this.posicion.y -= 1;
                    break; 
                case 1:
                    this.posicion.x += 1;
                    break; 
                case 2:
                    this.posicion.y += 1;
                    break; 
                case 3:
                    this.posicion.x -= 1;
                    break;    
            }
            
            break;
        case "d":
            if(this.posicion.r >= 3){
                this.posicion.r = 0;
            }else {
                this.posicion.r ++;
            }
            break;
        case "e":
            if(this.posicion.r <= 0){
                this.posicion.r = 3;
            }else {
                this.posicion.r -= 1;
            }
            break;
    }
    let back = this.grid[this.posicion.y].back.children[this.posicion.x];
    this.avion = createElement(back,{tagName:"span",className:"material-symbols-rounded",innerHtml:"flight",id:"flight",style:`transform: rotate(${this.posicion.r*90}deg)`});
}