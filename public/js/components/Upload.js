import createElement from "../createElement.js";

export default function Upload(back,file) {
    this.back = createElement({append:back,tagName:"div",class:"upload_back"});
    this.name = createElement({append:this.back,tagName:"h3",innerHTML:"Elegir imagen"});
    this.load = createElement({append:this.back,tagName:"div",class:"load"});
    this.back.addEventListener("click",(e)=> {
        file.click();
    })
}
Upload.prototype.loading = function() {
    this.load.style.width = "100%";
}