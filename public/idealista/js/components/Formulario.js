import createElement from "../createElement.js";
import Upload from "./Upload.js";
export default function Formulario(setPage) {
    this.form = createElement({append:document.body,tagName:"form",class:"form"});
    this.error = createElement({append:this.form,tagName:"h1",class:"error"});
    this.ref = createElement({append:this.form,tagName:"input",type:"text",attributes:[{name:"placeholder",value:"Ref"}]});
    this.precio = createElement({append:this.form,tagName:"input",type:"text",attributes:[{name:"placeholder",value:"Precio"}]});
    this.direccion = createElement({append:this.form,tagName:"input",type:"text",attributes:[{name:"placeholder",value:"Direccion"}]});
    this.descripcion = createElement({append:this.form,tagName:"textarea",attributes:[{name:"placeholder",value:"Descripcion"}]});
    this.banos = createElement({append:this.form,tagName:"input",type:"number",attributes:[{name:"placeholder",value:"Numero debaños"}]});
    this.habitaciones = createElement({append:this.form,tagName:"input",type:"number",attributes:[{name:"placeholder",value:"Numero habitaciones"}]});
    this.file = createElement({append:this.form,tagName:"input",type:"file",class:"file"});
    this.uploadImage = new Upload(this.form,this.file);
    this.image = createElement({append:this.form,tagName:"img"});
    
    this.guardar = createElement({append:this.form,tagName:"input",type:"button",value:"GUARDAR",class:"guardar"});
    this.anuncios = createElement({append:this.form,tagName:"a",innerHTML:"LOS ANUNCIOS",attributes:[{name:"href",value:"javascript:;"}]});
    this.file.addEventListener("change",(e)=> {
        this.setImage(this.file.files[0]);
    })
    this.guardar.addEventListener("click",()=> {
        this.sendData(setPage);
    })
    this.anuncios.addEventListener("click",()=> {
        setPage("a");
    })
    
}
Formulario.prototype.setImage = function(image) {
    let filereader = new FileReader();
    filereader.addEventListener("load",()=> {
        this.uploadImage.loading();
        setTimeout(()=> {
            this.image.src = filereader.result;
        },1000)
    })
    filereader.readAsDataURL(image);
}
Formulario.prototype.sendData = function(setPage) {
    if(this.ref.value !== "" && this.direccion !== "" && this.descripcion.value !== "" && this.banos.value !== "" && this.habitaciones.value !== "" && this.precio.value !== "" && this.file.files.length > 0 ) {
        const http = new XMLHttpRequest();
        const dataform = new FormData();
        const data = {
            ref:this.ref.value,
            precio: this.precio.value,
            direccion: this.direccion.value,
            descripcion: this.descripcion.value,
            banos: this.banos.value,
            habitaciones: this.habitaciones.value,
            img: this.file.files[0].name
        }
        dataform.append("anuncio",JSON.stringify(data));
        dataform.append("image",this.file.files[0]);
        http.open("POST","/guardarDatos",true);
        http.onreadystatechange = function() {
            if(http.status == 200 && http.readyState == 4) {
                alert("Se ha guardado correctamente!");
                setPage("f");
            }
        }
        http.send(dataform);
    }else {
        this.error.innerHTML = "Porfavor, compeleta todos los campos";
        setTimeout(()=> {
            this.error.innerHTML = "";
        },1000)
    }
}
