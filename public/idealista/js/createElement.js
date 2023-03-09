

export default function createElement(data = {
    append:document.body,
    tagName:"",
    id:"",
    class:"",
    innerHTML:"",
    style:"",
    type:"",
    src:"",
    value:"",
    attributes: [
        {
            name:"",
            value:""
        }
    ]
}) {

    let newElement = document.createElement(data.tagName);
    data.id ? newElement.id = data.id : null;
    data.class ? newElement.className = data.class : null;
    data.innerHTML ? newElement.innerHTML = data.innerHTML : null;
    data.style ? newElement.style.cssText = data.style : null;
    data.type ? newElement.type = data.type : null;
    data.src ? newElement.src = data.src : null;
    data.value ? newElement.value = data.value : null;
    data.attributes ? data.attributes.forEach(a =>{
        newElement.setAttribute(a.name,a.value);
    }) : null;
    data.append ? data.append.appendChild(newElement) : null;
    return newElement;
} 




