import Formulario from "./components/Formulario.js";
import Anuncios from "./components/Anuncios.js";
import createElement from "./createElement.js";
function App() {
    this.page = new Anuncios(this.setPage.bind(this));
}
App.prototype.setPage = function(name) {
    switch (name) {
        case "f":
            document.body.innerHTML = "";
            this.page = new Formulario(this.setPage.bind(this));
            break;
        case "a":
            document.body.innerHTML = "";
            this.page = new Anuncios(this.setPage.bind(this));
            break;
    
            
    }
}

const app = new App();