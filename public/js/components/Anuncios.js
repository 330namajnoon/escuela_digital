import createElement from "../createElement.js";
import Anuncio from "./Anuncio.js";
export default function Anuncios(setPage) {
    this.back = createElement({append:document.body,tagName:"div",class:"anuncios"});
    this.formulario = createElement({append:this.back,tagName:"a",innerHTML:"AGRAGAR ANUNCIO",attributes:[{name:"href",value:"javascript:;"}]});
    this.anuncios = [];
    this.descargar(this.setAnuncios.bind(this));
    this.formulario.addEventListener("click",()=> {
        setPage("f");
    })
}
Anuncios.prototype.setAnuncios = function(anuncios) {
    this.anuncios =  anuncios.map(a => new Anuncio(this.back,a));
}
Anuncios.prototype.descargar = function(setAnuncios) {
    const http = new XMLHttpRequest();
    http.open("POST","/descargar",true);
    http.onreadystatechange = function() {
        if(http.status == 200 && http.readyState == 4) {
            setAnuncios(JSON.parse(http.responseText));
        }
    }
    http.send();
}

