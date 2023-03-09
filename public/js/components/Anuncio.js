import createElement from "../createElement.js";

export default function Anuncio(back,data) {
    this.data = data;
    this.back = createElement({append:back,tagName:"div",class:"anuncio"});
    this.ref = createElement({append:this.back,tagName:"h1",innerHTML:this.data.ref});
    this.img = createElement({append:this.back,tagName:"img",src:`../../images/${this.data.img}`});
    this.precio = createElement({append:this.back,tagName:"h3",innerHTML:this.data.precio});
    this.direccion = createElement({append:this.back,tagName:"h2",innerHTML:this.data.direccion});
    this.descripcion = createElement({append:this.back,tagName:"h4",innerHTML:this.data.descripcion});
    this.habitaciones = createElement({append:this.back,tagName:"h4",innerHTML:"Habitaciones: "+this.data.habitaciones});
    this.banos = createElement({append:this.back,tagName:"h4",innerHTML:"Baños: "+this.data.banos});
    
}