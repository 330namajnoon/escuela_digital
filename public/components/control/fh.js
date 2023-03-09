import createElement from "../../js/createElement.js";

export default function Fh(functionContext,setFS) {
    this.back = createElement(functionContext.back,{tagName:"div",className:"f_back"});
    this.control = false;
    this.back.style.cssText = "box-shadow: inset 0 0 2px 1px black";
    this.back.addEventListener("click",(e)=> {
        if(this.back.style.boxShadow == "black 0px 0px 2px 1px inset") {
            functionContext.functions.forEach(f => {
                f.back.style.cssText = "box-shadow: inset 0 0 2px 1px black";
            })
            this.back.style.cssText = "inset 0 0 2px 1px rgb(93, 165, 34)";
            setFS(this);
        }else {
            this.back.style.cssText = "box-shadow: inset 0 0 2px 1px black";
        }
    })
}
