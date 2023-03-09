import createElement from "../../js/createElement.js";
import Fh from "./fh.js";
export default function Function(back,data,setFS) {
    this.name = data.name;
    this.back = createElement(back,{tagName:"div",className:"function_back"});
    this.name = createElement(this.back,{tagName:"h3",className:"function_name",innerHtml:data.name});
    this.functions = data.f.map((d) => new Fh(this,setFS));
}